
import type { FetchResponse, SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import type { UseFetchOptions } from '#app'

//回傳資料格式
interface ResOptions<T> {
  data?: T
  code?: number
  message?: string
  success?: boolean
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

export type HttpOption<T> = UseFetchOptions<ResOptions<T>>

// 錯誤處理
const handleError = <T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>) => {

  const err = (text: string) => {
    window.alert("有錯誤喔～～～")
    // Message.error({
    //   content: response?._data?.message ?? text,
    //   icon: () => h(IconEmoticonDead),
    // })
  }
  if (!response._data) {
    err('请求超时，服务器无响应！')
    return
  }
 
  const handleMap: { [key: number]: () => void } = {
    404: () => err('服务器资源不存在'),
    500: () => err('服务器内部错误'),
    403: () => err('没有权限访问该资源'),
    401: () => {
      err('登录状态已过期，需要重新登录')
    },
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}

// get方法传递数组形式参数
const paramsSerializer = (params?: SearchParameters) => {
  if (!params) return
  

  //TODO:找時間安裝lodash套件 const query = useCloneDeep(params)
  const query = JSON.parse(JSON.stringify(params)) 

  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}



const useFetch_custom = <T>(url: UrlType, useFetchOptions: UseFetchOptions<ResOptions<T>>) => {
  return useFetch<ResOptions<T>>(url, {
    // 請求攔截
    onRequest({ options }) {
      // get方法传递数组形式参数
      options.params = paramsSerializer(options.params)
      
      // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
      const config = useRuntimeConfig()
      options.baseURL = config.public.NUXT_PUBLIC_API_BASE
      
      // TODO:添加请求头,没登录不携带token
    },
    // 回應攔截
    onResponse({ response }) {
      //從 HTTP 請求或響應的頭部中獲取指定的頭部值，判斷內容應該被視為一個要下載的文件，而不是直接在瀏覽器中顯示。
      if (response.headers.get('content-disposition') && response.status === 200)
        return response

      // 在这里判断错误
      if (response._data.code !== 200) {
        handleError<T>(response)
        return Promise.reject(response._data)
      }
      
      // 成功返回
      return response._data
    },
    // 錯誤攔截
    onResponseError({ response }) {
      handleError<T>(response)
      return Promise.reject(response?._data ?? null)
    },
    //合併自定義配置
    ...useFetchOptions,
  })
}

// composables資料夾下會自動被其他檔案引入
export const useHttp = {
  get: <T>(url: UrlType, params?: any, option?: HttpOption<T>) => {
    return useFetch_custom<T>(url, { method: 'get', params, ...option })
  },

  post: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return useFetch_custom<T>(url, { method: 'post', body, ...option })
  },

  put: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return useFetch_custom<T>(url, { method: 'put', body, ...option })
  },

  delete: <T>(url: UrlType, body?: any, option?: HttpOption<T>) => {
    return useFetch_custom<T>(url, { method: 'delete', body, ...option })
  },
}

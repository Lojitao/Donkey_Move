import type { FetchResponse, SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import type { UseFetchOptions } from '#app'
import { useLoadingStore } from '~/stores/loadingStore';
import Swal from 'sweetalert2';



//-------定義資料格式-------
interface ResOptions<T> {
  data?: T
  code?: number
  message?: string
  success?: boolean
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)
export type HttpOption<T> = UseFetchOptions<ResOptions<T>>

type UseHttpParams<T> = {
  url: UrlType;
  method: any;
  params?: any;
  body?: any;
  option?: HttpOption<T>;
}
//-------定義資料格式-------


// 錯誤談窗
function alertError(text: string = "" ,response?:any){
  //TODO:使用sweetAlert()
  Swal.fire({
    icon: 'error',
    title: response?._data?.message ?? text,
    text: text,
    confirmButtonText: 'Close'
  });
}
//錯誤處理
function handleError<T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>){


  if (!response._data) return alertError('請求超時') //TODO:超時在哪設定?????
  if (response._data) return alertError('', response)
 
  const handleMap: { [key: number]: () => void } = {
    404: () => alertError('服务器资源不存在'),
    500: () => alertError('服务器内部错误'),
    403: () => alertError('没有权限访问该资源'),
    401: () => alertError('登录状态已过期，需要重新登录')
  }
  handleMap[response.status] ? handleMap[response.status]() : alertError('未知错误！')
}

//get方法传递数组形式参数
function paramsSerializer(params?: SearchParameters){
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

//攔截器
const useFetch_custom = <T>(url: UrlType, useFetchOptions: UseFetchOptions<ResOptions<T>>) => {
  const loadingStore = useLoadingStore();
  
  return useFetch<ResOptions<T>>(url, {
    // 請求攔截
    onRequest({ options }) {
      if(process.client) loadingStore.startRequest();//全局loading狀態管理

      options.params = paramsSerializer(options.params)// get方法传递数组形式参数
      
      // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
      const config = useRuntimeConfig()
      options.baseURL = config.public.NUXT_PUBLIC_API_BASE
      
      // TODO:添加请求头,没登录不携带token
    },
    // 回應攔截
    onResponse({ response }) {
      if(process.client) loadingStore.endRequest()//全局loading狀態管理

      // 網路回傳狀態是200,但資料的code!==200(後端給的)
      // TODO:需要return Promise.reject(response._data)嗎???
      if (response._data.code !== 200)handleError<T>(response)
        
      // 成功返回
        //從 HTTP 請求或響應的頭部中獲取指定的頭部值，判斷內容應該被視為一個要下載的文件，而不是直接在瀏覽器中顯示。
      if (response.headers.get('content-disposition') && response.status === 200)return response
      return response._data
    },
    // 網絡錯誤、伺服器返回非2xx的HTTP狀態碼
    onResponseError({ response }) {
      if(process.client) loadingStore.endRequest()//全局loading狀態管理
      handleError<T>(response)
      // TODO:需要 return Promise.reject(response?._data ?? null) 嗎???
    },
    //合併自定義配置
    ...useFetchOptions,
  })
}


// composables資料夾下會自動被其他檔案引入
export const useHttp = <T>(requestData: UseHttpParams<T>) => {
  const { url, method, params, body, option } = requestData
  
  return useFetch_custom(url, { method, params, body, ...option })
}
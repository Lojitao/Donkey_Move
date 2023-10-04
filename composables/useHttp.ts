import type { FetchResponse, SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import type { UseFetchOptions } from '#app'
import { useLoadingStore } from '~/stores/loadingStore';
import Swal from 'sweetalert2';

//------*******定義資料格式 START *******-------
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
//-------*******定義資料格式 END*******-------


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
      console.log('response',response);
      
      if(process.client) loadingStore.endRequest()//全局loading狀態管理

      // 網路回傳狀態200,但後端的code!==200
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
    },
    //合併自定義配置
    ...useFetchOptions,
  })
}

const handleMap: { [key: number]: () => void } = {
  404: () => alertError('404-資源不存在'),
  500: () => alertError('500-伺服器錯誤'),
  403: () => alertError('403-没有權限訪問'),
  401: () => alertError('401-登入狀態已過期,請重新登入')
}

// 錯誤談窗
function alertError(text: string = "" ,response?:any){
  let errorMsg = ''
  if(text) errorMsg = text
  if(response?._data?.result) errorMsg = response._data.result
  if(response?._data?.message) errorMsg = response._data.message

  Swal.fire({
    icon: 'error',
    title: '',
    text: errorMsg,
    confirmButtonText: 'Close'
  });
}
//錯誤處理
function handleError<T>(response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>){

  // 先檢查 HTTP 狀態碼
  if (handleMap[response.status]) return handleMap[response.status]()

  // 檢查後端返回的錯誤碼
  if (response._data && response._data.code !== 200) return alertError('', response)

  // 如果都不符合上述條件，則返回「未知錯誤」
  alertError('未知错误！');
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


// composables資料夾下會自動被其他檔案引入
export const useHttp = <T>(requestData: UseHttpParams<T>) => {
  const { url, method, params, body, option } = requestData
  
  return useFetch_custom(url, { method, params, body, ...option })
}
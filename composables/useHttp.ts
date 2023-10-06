import type { FetchResponse, SearchParameters } from 'ofetch'
import type { Ref } from 'vue'
import type { UseFetchOptions } from '#app'
import { useLoadingStore } from '~/stores/loadingStore';
import Swal from 'sweetalert2';

type UseHttpParams = {
  url: string | Request | Ref<string | Request> | (() => string | Request);
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: any;
  body?: any;
  option?:  UseFetchOptions<any>;
}

const handleMap: { [key: number]: () => void } = {
  404: () => alertError('404-資源不存在'),
  500: () => alertError('500-伺服器錯誤'),
  403: () => alertError('403-没有權限訪問'),
  401: () => alertError('401-登入狀態已過期,請重新登入')
}

// 錯誤談窗
function alertError(text:string = "" ,response?:any){
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
function handleError(response: FetchResponse<any>){
  const { status, _data } = response;
  // 先檢查 HTTP 狀態碼
  if (handleMap[status]) return handleMap[status]();

  // 檢查後端返回的錯誤碼
  if (_data && _data.code !== 200) return alertError('', response);

  // 如果都不符合上述條件，則返回「未知錯誤」
  alertError('未知错误！');
}

//get方法传递数组形式参数
function paramsSerializer(params?: SearchParameters){
  if (!params) return

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
export const useHttp = <T>(requestData: UseHttpParams) => {
  const { url, method, params, body, option } = requestData
  
  const loadingStore = useLoadingStore();
  
  return useFetch(url, {
    method,
    params,
    body,
    ...option,//合併自定義配置
    onRequest({ options }) {// 請求攔截
      //全局loading狀態管理
      if(process.client) loadingStore.startRequest()
      
      //get方法的queryString要自己組，不像axios會幫忙處理這一塊
      options.params = paramsSerializer(options.params)

      // nuxt3環境變數從useRuntimeConfig()取得
      const { public: { NUXT_PUBLIC_API_BASE } } = useRuntimeConfig();
      options.baseURL = NUXT_PUBLIC_API_BASE
    },
    onResponse({ response }) { // 回應攔截
      //全局loading狀態管理
      if (process.client) loadingStore.endRequest()
      
      // 網路回傳狀態200,但後端的code!==200
      if (response._data.code !== 200)handleError(response)
      
      //從 HTTP 請求或響應的頭部中獲取指定的頭部值是不是blob
      if (response.headers.get('content-disposition') && response.status === 200) return response
      
      return response._data
    },
    onResponseError({ response }) { // 網絡錯誤、伺服器返回非2xx的HTTP狀態碼
      if(process.client) loadingStore.endRequest()//全局loading狀態管理
      handleError(response)
    }
  })
}
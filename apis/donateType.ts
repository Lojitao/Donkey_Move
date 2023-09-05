import { HttpOption } from '~/composables/useHttp';

// option就是useFetch的选项参数
// export const Publicload = async (params?:{}|[], option?:HttpOption<any>) => {
//   return await useHttp.get(
//     { 
//       url: 'categorys/publicload',
//       method: 'get',
//       params,
//       option 
//     }
//   )
// }
const api = {
  Publicload(params?:{}|[], option?:HttpOption<any>){
    return useHttp(
      { 
        url: 'categorys/publicload',
        method: 'get',
        params,
        option 
      }
    )
  }
}


export default api

import { HttpOption } from '~/composables/useHttp';

enum Api {
  Publicload = 'categorys/publicload',
}

// option就是useFetch的选项参数
export const Publicload = async (params?:{}|[], option?:HttpOption<any>) => {
  return await useHttp.get(Api.Publicload, params, option)
}

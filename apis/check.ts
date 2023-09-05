import { HttpOption } from '~/composables/useHttp';

export const Login = async (body?:{}|[], option?:HttpOption<any>) => {
  return await useHttp(
    { 
      url: 'Check/Login',
      method: 'post',
      body,
      option 
    }
  )
}
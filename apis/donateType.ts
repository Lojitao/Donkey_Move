const api = {
  Publicload(params?:{}|[]){
    return useHttp({ 
      url: 'categorys/publicload',
      method: 'GET',
      params,
      option:{
        headers:{}
      }
    })
  },
  // test(params?:{}|[], option?:HttpOption<any>){
  //   return useHttp({ 
  //     url: 'test',
  //     method: 'get',
  //     params,
  //     option 
  //   })
  // }
}

export default api

<template>
  <div class="bg-gray-300">
    <Loading></Loading>
    <p>我是app.vue</p>
    
    <NuxtLayout></NuxtLayout>
    <div @click="getData()" class="cursor-pointer">點擊我</div>
   
    <!-- <NuxtWelcome /> -->
  </div>
</template>


<script setup lang="ts">
  // import donateType from "~/apis";
  import API from '~/apis';

  // const { data: userInfoResult, execute } = await apis.donateType.Publicload()
  // console.log('userInfoResult',userInfoResult);

  // const getData = async()=>{
  //   console.log('this', this)
    
  //   const oneResult = await one()
  //   const twoResult = await two(oneResult)
  //   console.log(twoResult);
  // }
  
  // const one = async()=>{
  //   const { data: userInfoResult, execute } = await API.donateType.Publicload()
  //   return userInfoResult
  // }

  // const two = async(data:any)=>{
  //   console.log('data',data);
  //   const { data: userInfoResult, execute } = await API.donateType.Publicload()
  //   return userInfoResult
  // }


  async function getData(){
    const oneResult = await one()
    const twoResult = await two(oneResult)
    console.log(twoResult);
  }
  
  async function one (){
    const { data: userInfoResult, execute } = await API.donateType.Publicload()
    return userInfoResult
  }

  async function two (data:any){
    console.log('data',data);
    const { data: userInfoResult, execute } = await API.donateType.Publicload()
    return userInfoResult
  }

</script>

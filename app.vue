<template>
  <div class="font-sans md:bg-black lg:bg-red">
    <LayoutsHeader />
    <Loading></Loading>
    <p class="hover:(bg-gray-400 font-medium) primary-color">我是app.vue</p>
    
    <NuxtLayout></NuxtLayout>
    <!-- <div @click="getData()" class="cursor-pointer">點擊我</div> -->
   
    <!-- <NuxtWelcome /> -->
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
  // import donateType from "~/apis";
  // import Header from '@/components/layouts/Header.vue'
  // import Footer from '@/components/layouts/Footer.vue'
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

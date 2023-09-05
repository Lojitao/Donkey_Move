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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// import donateType from "~/apis";
// import apis from "~/apis"

// const { data: userInfoResult, execute } = await apis.donateType.Publicload()
// console.log("userInfoResult", userInfoResult)

// const getData = async () => {
//   const { data: userInfoResult, execute } = await apis.donateType.Publicload()
//   console.log("userInfoResult", userInfoResult)
// }
  // import donateType from "~/apis";
  import API from '~/apis';

  // const { data: userInfoResult, execute } = await apis.donateType.Publicload()
  // console.log('userInfoResult',userInfoResult);

  const getData = async()=>{
    // let reqParams = {
    //   TypeId:"SYS_DONATE_USERTYPE",
    //   page:1,
    //   limit:999,
    //   key:"",
    //   orderby:""
    // }

    await API.donateType.Publicload("ascsac")
  }
</script>

<template>
  <div>
    <!-- <div @click="getData()" class="cursor-pointer">點擊我</div> -->
    <!-- <NuxtWelcome /> -->

    <NuxtLayout>
      <Header />
      <NuxtPage></NuxtPage>
    </NuxtLayout> 


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
</script>

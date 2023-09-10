<template>
  <div class="font-sans lg:bg-red">
    
    <!-- <div class="i-logos-active-campaign !w-10em !h-10em text-red-500" /> -->
    <div class="i-mdi-account-credit-card-outline?mask hover:text-blue-500 rotate-6 text-red-500 w-10em h-10em"></div>
    <!-- <Header /> -->
    <!-- <LayoutsHeader /> -->
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
  // import API from '~/apis';


  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

</script>
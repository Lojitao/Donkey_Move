<template>
  <div class="font-sans lg:bg-red max-w-1920px m-auto">
    
    <Loading></Loading>

    <LayoutsHeader></LayoutsHeader>

    <NuxtLayout></NuxtLayout>

    <LayoutsFooter></LayoutsFooter>

  </div>
</template>

<script setup lang="ts">
  //**引入API**//
  // import API from '~/apis';

  //**引入gsap**//  
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/ScrollTrigger';
  // import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

  
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

</script>
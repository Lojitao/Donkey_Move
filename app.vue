<template>
  <div class="w-full">
    <client-only>
      <Loading></Loading>
    </client-only>

    <layoutsHeader></layoutsHeader>

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


<style>

/* *{
  outline: 1px solid red;
} */
</style>
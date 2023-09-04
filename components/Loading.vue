<template>
  <div>
    <transition name="opacity">
      <div v-if="loadingStore.isLoading" class="w-full top-0 h-screen flex flex-col justify-center items-center z-[9999] fixed notranslate">
        <div class="w-full h-full opacity-60 bg-white fixed z-[999]"></div>
        <p data-text="Loading..." class="textLoading text-[60px] md:[120px]">Loading...</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<script setup>
  import { useLoadingStore } from '~/stores/loadingStore';
  const loadingStore = useLoadingStore();
</script>


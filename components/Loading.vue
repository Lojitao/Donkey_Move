<template>
  <div>
    <transition name="opacity">
      <div class="w-full top-0 h-screen flex flex-col justify-center items-center z-[9999] fixed notranslate">
      <!-- <div v-show="$store.state.loadingArray.length > 0 || $store.state.isShowLoading" class="w-full top-0 h-screen flex flex-col justify-center items-center z-[9999] fixed notranslate"> -->
        <div class="w-full h-full opacity-60 bg-white fixed z-[999]"></div>
        <img class="relative z-[9999]" src="../static/loading/loading.png" alt="">
        <p data-text="Loading..." class="textLoading text-[60px] md:[120px]">Loading...</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
	name: "Loading",
}
</script>


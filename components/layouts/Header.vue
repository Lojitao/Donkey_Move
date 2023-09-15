<script setup>
const menuShow = ref(false)

const menuList = ref([
  {
    id: "1",
    path: "/about",
    name: "DONKEY MOVE\n關於我們",
  },
  {
    id: "2",
    path: "/informationAndNews",
    name: "INFORMATION / NEWS\n資訊專欄 / 最新消息",
  },
  {
    id: "3",
    path: "/practiced",
    name: "SOCIAL PRACTICED\n社會實踐",
  }
])
</script>

<template>
  <!-- 漢堡按鈕 -->
  <div class="w-full h-50px fixed flex items-center justify-end px-20px z-10 md:(px-60px)">
    <div @click="menuShow = !menuShow" :class="{ 'nav-icon': true, open: menuShow }">
      <span class="block absolute h-2px w-full bg-[#E0A57E] rounded-2px opacity-100 left-0 rotate-0 duration-250 ease-in-out top-0"></span>
      <span class="block absolute h-2px w-20px bg-[#E0A57E] rounded-2px opacity-100 left-1/6 rotate-0 duration-250 ease-in-out top-50%"></span>
      <span class="block absolute h-2px w-full bg-[#E0A57E] rounded-2px opacity-100 left-0 rotate-0 duration-250 ease-in-out top-100%"></span>
    </div>
  </div>

  <!-- 導覽列 -->
  <Transition name="fade">
    <nav v-if="menuShow" class="w-full h-screen z-5 bg-[#fff] opacity-95 fixed top-0 right-0 flex items-center justify-center">
      <NuxtLink @click="menuShow = !menuShow" to="/"  class="block absolute w-15% top-7% left-50% transform -translate-x-1/2 z-2 lg:(w-6%)">
        <img src="/images/logo.png" alt="小驢行LOGO" class="w-full block" />
      </NuxtLink>
      <ul class="w-80% flex flex-col gap-50px text-center text-#5A5657 text-xl font-semibold md:(w-60%)">
        <li v-for="item in menuList" :key="item.id">
          <NuxtLink @click="menuShow = !menuShow" :to="item.path" active-class="active-link" class="block whitespace-pre-wrap md:(whitespace-nowrap) hover:text-#ED8E03">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
/* 漢堡按鈕 */
.nav-icon {
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 10;
}
.nav-icon.open span:nth-child(1) {
  top: 11px;
  transform: rotate(135deg);
}
.nav-icon.open span:nth-child(2) {
  opacity: 0;
  left: -30px;
}
.nav-icon.open span:nth-child(3) {
  top: 11px;
  transform: rotate(-135deg);
}

/* 導覽列 */
/* 淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.active-link {
  color: #ED8E03; /* 或其他你想要的顏色 */
}
</style>

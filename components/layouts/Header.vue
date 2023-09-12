<script setup>
const menuShow = ref(false)

const menuList = reactive([
  {
    id: "1",
    path: "/about",
    name: "DONKEY MOVE 關於我們",
  },
  {
    id: "2",
    path: "/news",
    name: "LATEST NEWS 最新消息",
  },
  {
    id: "3",
    path: "/practiced",
    name: "SOCIAL PRATICED 社會實踐",
  },
  {
    id: "4",
    path: "/partner",
    name: "COOPERATE PARTNER 合作夥伴",
  }]
)
</script>

<template>
  <!-- 漢堡按鈕 -->
  <div class="w-full h-50px fixed flex items-center justify-end px-60px py-20px z-10">
    <div @click="menuShow = !menuShow" :class="{ 'nav-icon': true, open: menuShow }">
      <span class="block absolute h-2px w-full bg-[#E0A57E] rounded-2px opacity-100 left-0 rotate-0 duration-250 ease-in-out top-0"></span>
      <span class="block absolute h-2px w-20px bg-[#E0A57E] rounded-2px opacity-100 left-1/6 rotate-0 duration-250 ease-in-out top-50%"></span>
      <span class="block absolute h-2px w-full bg-[#E0A57E] rounded-2px opacity-100 left-0 rotate-0 duration-250 ease-in-out top-100%"></span>
    </div>
  </div>

  <!-- 導覽列 -->
  <Transition name="fade">
    <nav v-if="menuShow" class="w-full h-screen z-5 bg-[#fff] opacity-85 fixed top-0 right-0 flex items-center justify-center">
      <ul class="w-60% flex flex-col gap-10 text-center text-#5A5657 text-xl font-semibold">
        <li v-for="item in menuList" :key="item.id">
          <NuxtLink :to="item.path" @click="menuShow = !menuShow" class="block hover:text-#ED8E03">{{ item.name }}</NuxtLink>
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
</style>

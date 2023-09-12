<template>
  <div class="bg-#3061A7 text-white">
    <section class="py-6 px-4 border-b-2px border-white">
      
      <div>top</div>
      
      <div class="grid grid-rows-3 grid-flow-col gap-4 lg:grid-flow-row lg:custom-grid-cols">
        <div class="row-span-1 md:row-span-1.5 lg:col-span-1">Logo</div>

        <div class="row-span-1 md:row-span-1.5 lg:col-span-1 flex gap-x-4">
          <NuxtLink v-for="item in menuList" :to="item.path" :key="item.id">{{ item.name }}</NuxtLink>
        </div>

        <div class="row-span-1 md:row-span-3 lg:col-span-1">ICON</div>
      </div>

    </section>
    <section class="py-6 px-4">
      <p class="mb-5">Copyright © 2023 小驢行</p>
      <p>本網站圖文資料未經授權請勿使用，請使用IE10版以上、Chrome、FireFox、Edge、Safari瀏覽器瀏覽</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<script setup>
  const menuList = ref([
    {
      id:"1",
      path:"/news",
      name:"最新消息"
    },
    {
      id:"2",
      path:"/technicalServices",
      name:"技術服務"
    },
    {
      id:"3",
      path:"/about",
      name:"關於我們",
      isAKink: true
    }
  ])
</script>

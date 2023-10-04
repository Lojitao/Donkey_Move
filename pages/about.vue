<template>
  <main class="min-h-screen">
    
    <!-- banner -->
    <div class="relative h-[585px] md:h-auto">
      <img class="w-full h-full md:hidden object-cover" src="~/assets/images/about/bg_mobile.png" alt="">
      <img class="w-full h-full hidden md:block lg:hidden" src="~/assets/images/about/bg_pad.png" alt="">
      <img class="w-full h-full hidden lg:block" src="~/assets/images/about/bg_pc.png" alt="">
      <img class="absolute center-horizontal top-45px w-30% md:(top-80px w-15%) lg:(w-7%)" src="~/assets/images/practiced/logo_white.png" alt="">
      <header class="mb-50px absolute center-horizontal top-50% md:(top-60% left-30%) lg:(left-20%)">
        <h2 class="text-50px text-white text-center md:(text-left text-60px)">ABOUT</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-50px font-medium md:(text-60px)">DONKEY</h2>
          <h2 class="text-30px md:(text-40px)">關於我們</h2>
        </div>
      </header>
      <p class="absolute text-white right-10px bottom-5px">台東池上伯朗大道</p>
    </div>

    <button @click="getData()">打API</button>
    <div v-for="item in data" :key="item.id">
      {{ item.name }}
    </div>
    <!-- 內容 -->
    <section class="mobile-px md:pad-px lg:pc-px my-8 flex flex-col gap-y-6">   
      <p>小驢行股份有限公司成立於2018年，以社會企業的角色長期發展移動服務和行動科技的社會創新創業領域。是以科技創新的方式，致力於滿足台灣高齡化社會對各種移動服務的需求。</p>
      <p>面對目前人口結構老化的現象，多方數據顯示，長者在外出就醫、復健、購物、旅遊或參與社會活動時遇到了困難，有些長者甚至需要支付高額的交通成本才能獲得所需的服務。</p>
      <p>為了解決長者面臨的交通困境，團隊開發「長照交通車輛派遣系統」的資訊化叫車系統，用共享經濟的理念，整合政府的長照專車、復康巴士以及民間租賃車行或無障礙計程車司機的資源。迅速媒合長者或家屬對接送交通服務的需求。</p>
      <div>
        <img class="w-full block lg:hidden" src="~/assets/images/about/pad_contetnt.png" alt="">
        <img class="w-full hidden lg:block" src="~/assets/images/about/pc_content.png" alt="">
      </div>
      <p>此外，本公司亦致力於推動長照服務的產業化。我們的司機端使用任務執行回報的APP，透過適域服務（Location-based Service）的多元創新，實現管理標準化，努力打造以移動服務為核心的點-線-面服務系統。未來計劃進一步整合更多長照2.0的創新服務，滿足日常生活需求實踐「Mobility as a social service」的服務願景。</p>
      <p>同時，也與相關的社會服務團體、基金會等合作，開發數位化物資運送系統、震災溫馨接送接駁系統等。讓民眾能夠透過相關服務滿足就醫、就學、就養等各種需求。積極參與共享交通，結合資訊系統設計和創新服務模式，為大家提供更便利的服務。</p>
    </section>
    
  </main>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<script setup>
  import api from "~/apis" 
  let data = ref(null);

  // const result = await api.donateType.Publicload();
  // data.value = result.data._rawValue.data;
  // console.log('SSR_data',data._rawValue);

  async function getData(){
    const result = await api.donateType.Publicload();
    console.log('result',result);
    data.value = result.data._rawValue.data;
  }

  // 使用 useFetch
  // const { result } = useFetch(async () => {
  //   const response = await api.donateType.Publicload();
  //   return response.data._rawValue;
  // });
  // data.value = result.value;
  

</script>
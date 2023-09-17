<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative">
      <img class="w-full md:hidden" src="/images/practiced/practiced_bg_mobile.png" alt="">
      <img class="w-full hidden md:block lg:hidden" src="/images/practiced/practiced_bg_ pad.png" alt="">
      <img class="w-full hidden lg:block" src="/images/practiced/practiced_bg_pc.png" alt="">
      <img class="absolute center-horizontal top-45px md:top-80px" src="/images/practiced/logo_white.png" alt="">
      <header class="mb-50px absolute center-horizontal top-284px md:top-380px">
        <h2 class="text-60px text-white text-center md:text-left">SOCIAL</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-60px font-medium">PRACTICE</h2>
          <h2 class="text-40px">社會實踐</h2>
        </div>
      </header>
      <p class="absolute text-white right-10px bottom-5px">嘉義縣阿里山產業道路</p>
    </div>
    
    <!-- 內容 -->
    <div class="mobile-px md:pad-px lg:pc-px">
      
      <!-- 介紹 -->
      <section class="flex flex-col items-center gap-y-8 my-30px md:(flex-row gap-x-4 items-end) lg:(w-1000px mx-auto gap-x-12)">
        
        <div class="hidden md:block">
          <img src="/images/index/social/oldMan.png" alt="">
        </div>
        
        <div class="w-full px-30px  border-t-2 border-b-2 text-center border-black py-40px text-left text-justify">
          <span>小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</span>
        </div>

        <div class="hidden md:block">
          <img src="/images/index/social/oldWomen.png" alt="">
        </div>

      </section>

      <!-- 列表 -->
      
      <section v-for="item in socialList" :key="item.key" class="mt-100px md_1024:(flex gap-x-10 odd:flex-row-reverse)">
        <!--影片-->
        <ClientOnly>
          <div class="mb-58px w-full md_1024:(w-[1/2-(2.5rem/2)])">
            <div class="w-full aspect-[600/330] relative">
              <iframe class="absolute z-2 w-[calc(100%-15px)]" height="100%" :src="item.vedioSrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="w-[calc(100%-15px)] bg-sub h-full absolute right-0 -bottom-26px z-1"></div>
              <span class="block w-10px h-10px bg-sub absolute top-[calc((26px/2)-5px)] right-[calc((15px/2)-5px)] rounded-full"></span>
              <span class="block w-10px h-10px bg-sub absolute -bottom-[calc((26px/2)+5px)] left-[calc((15px/2)-5px)] rounded-full"></span>
            </div>
          </div>
        </ClientOnly>

        <!--文字敘述-->
        <div class="w-full md_1024:(w-[1/2-(2.5rem/2)])">
          <p class="primary font-700 text-26px mb-30px md:mb-36px">{{item.title}}</p>
          <ClientOnly>
            <p class="mb-58px" v-html="item.content"></p>
          </ClientOnly>
          <!-- <div class="border-t border-r border-black relative h-[111px]">
            <span class="bg-white absolute text-lg -top-14px pr-10px">{{item.content}}</span>

            <div class="text-[#91ABD0] absolute center-vertically">
              共乘<span class=" text-26px">{{item.visitors}}</span>人次
            </div>

            <div class="text-[#91ABD0] absolute -bottom-14px right-10px">
              總結約<span class=" text-26px">{{item.carbonEmission}}</span>公斤碳排放量
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Practiced'
  }
</script>

<script setup>
  const socialList = ref(
    [
      {
        id:"1",
        vedioSrc:"https://www.youtube.com/embed/_JFnLwWs_Yw?si=FIwex10zQRflv4dJ",
        title:"食醫助行-台東1919惜食運輸",
        content:"<p>一趟239公里的惜食物資接力運送任務，將食物、物資及愛從高雄大寮一路送到台東長濱，支持偏鄉長輩們的生活。<br><br></p><p>起源於台灣微光行動協會(原稱：臺灣計程車學院協會)的「微光抗疫」計畫，在110年疫情最嚴峻之時，派遣防疫專車協助確診者的接送。疫情已經趨緩，但服務社會的光芒不會因此熄滅，「微光」將持續服務社會、關注社會議題。</p> "
      },
      {
        id:"2",
        vedioSrc:"https://www.youtube.com/embed/qws6quRKui0?si=c6UhjR58W5UAS76u",
        title:"微光134行動 傳善到偏鄉守護老幼窮",
        content:"<p>高齡化的台灣，即將有134個偏鄉，面對非常嚴峻的交通接送服務的困境，留下來的居民多半行動不便，加上地處偏遠、缺乏大眾運輸，計程車也因市場機制的環境考量不太願意來。<br><br></p><p>微光134再生扶助計畫，培訓偏鄉民眾成為微光駕駛，讓他們回到自己的家鄉，成為家鄉的照顧者。希望最終台灣134個偏鄉都能有車輛和陪伴駕駛，也需要您的支持。</p> "
      },
      {
        id:"3",
        vedioSrc:"https://www.youtube.com/embed/1SVttlGsElc?si=tPLNaR3AUYCypV3W",
        title:"花木蘭女性培力計畫",
        content:"<p>培訓照服員斜槓司機的花木蘭計畫正式啟動，有認識正在尋求重回職場但又有家庭照顧壓力的二度就業女性朋友，可以透過下面的表單報名。我們一起來幫助女性不只可以有機會重回職場，又可以兼顧家庭！（目前因疫情關係，課程暫停辦。請關注我們的臉書獲得最新資訊！</p>"
      },
      {
        id:"4",
        vedioSrc:"https://www.youtube.com/embed/6-ft-_fL-mU?si=Hh_2OjszJbgK9d02",
        title:"微光134行動_移動救偏鄉",
        content:"<p>台灣有134個地區面臨嚴重的人口外移問題，他們多半地處偏遠交通不便。微光以移動服務社會，支持偏鄉交通接送發展，讓每一個偏鄉都能有一台車，一位陪伴司機，讓偏鄉長輩們都能順利去看病就醫。 邀請您一同關注微光；支持微光！</p>"
      }
    ]
  )
</script>


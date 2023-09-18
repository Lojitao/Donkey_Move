<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative h-[585px] md:h-auto">
      <img class="w-full h-full object-fill md:hidden" src="/images/newsAndInfo/mobile_bg.png" alt="">
      <img class="w-full h-full hidden md:block lg:hidden" src="/images/newsAndInfo/pad_bg.png" alt="">
      <img class="w-full h-full hidden lg:block" src="/images/newsAndInfo/pc_bg.png" alt="">
      <img class="absolute center-horizontal top-25px md:top-80px" src="/images/practiced/logo_white.png" alt="">
      <header class="mb-50px w-fit absolute center-horizontal top-254px md:top-380px">
        <h2 class="text-60px break-all text-white text-center md:text-left">INFO/</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-60px font-medium">NEWS</h2>
          <h2 class="text-40px">資訊專欄/最新消息</h2>
        </div>
      </header>
      <p class="absolute text-white right-10px bottom-5px">新竹縣湖口鄉</p>
    </div>

    <!-- tabs -->
    <section class="flex flex-col gap-y-4 items-center md_1024:(flex flex-row gap-x-6 justify-center) my-40px">
      <div v-for="tab in newsAndInfoTabs" :key="tab.id" @click="checkedTabId = tab.id"
        class="w-fit cursor-pointer flex flex-col text-40px md:text-50px transition duration-300 py-16ppx px-8px relative hover:sub-color"
        :class="{'sub-color':checkedTabId===tab.id,'color-[#ABABAB]':checkedTabId!==tab.id,'text-right':tab.id===2}" 
      >
        <span class="break-all">{{tab.en}}</span>
        <span>{{tab.zh_tw}}</span>

        <div class="w-10px h-10px rounded-full bg-sub absolute left-0px -top-5px transition duration-300"
          :class="{'block':checkedTabId===tab.id,'hidden':checkedTabId!==tab.id}"
        ></div>
        
        <!-- 平板 svg-->
        <div class="hidden absolute -top-5px left-0 md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 180"
            class=" w-375px h-180px  transition duration-200" 
            :class="isClicked(tab.id)">
            <path d="M0.5 24.3203L28.8557 0.5H375V159.5H28.6736H0.5V24.3203Z" fill="none" stroke="#3061A7"/>
          </svg>
        </div>

        <!-- 手機 svg -->
        <div class="block md:hidden absolute -top-5px left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 130"
            class="w-290px transition duration-200" 
            :class="isClicked(tab.id)">
            <path d="M0.5 24.3203L28.8557 0.5H290V130H28.6736H0.5V24.3203Z" fill="none" stroke="#3061A7"/>
          </svg>
        </div>
       
      </div>
    </section>

    <!-- list -->
    <section class="mobile-px mb-[84px] md:pad-px lg:pc-px flex gap-y-8 flex-col justify-center md:(flex-row gap-6 flex-wrap justify-start)">
      <div v-for="item in renderNewsOrInfoList" :key="item.id"
        class="md:(w-[calc(50%-0.75rem)]) lg:(w-[calc(33%-0.75rem)]) relative group"
      >
        <div class="absolute top-10px left-10px w-fit z-3">
          <div class="w-20px h-20px rounded-full bg-white border-2px border-blue-500 absolute top-0 right-8px z-2"></div>
          <img class="transform scale-150 transform rotate-10" src="/images/newsAndInfo/more_icon_02.png" alt="">
          <img class="transform scale-150 -rotate-5 group-hover:(rotate-5) transition" src="/images/newsAndInfo/more_icon_01.png" alt="">
        </div>
        <!-- 圖片 -->
        <div @click="goNewAndInfoDetail(item)" class="border-r pr-2 pb-2 border-b border-[#3061A7] relative group cursor-pointer">
          <img class="w-full" :src="item.imageSrc" alt="">
        </div>
        <!-- 內容 -->
        <div class="flex flex-col gap-y-2">
          <!-- 標題 -->
          <p class="text-2xl font-blod group-hover:(sub-color) transition">{{ item.title }}</p>
          <div class="flex justify-between items-center">
            <!-- 時間 -->
            <span class="text-[#A8A8A8]">{{ item.time }}</span>
            <!-- 觀看人數 -->
            <div v-if="checkedTabId===2" class="flex items-center">
              <span class="i-healthicons-eyes text-3xl text-[#3061A7]"></span>
              <span class="text-[#A8A8A8]">{{item.viewCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </main>
</template>

<script>
  export default {
    name: 'informationAndNews_Index'
  }
</script>

<script setup>
  const router = useRouter()

  let checkedTabId = ref(1)
  const newsAndInfoTabs = ref([
    {
      id:2,
      zh_tw:'資訊專欄',
      en:'INFORMATION'
    },
    {
      id:1,
      zh_tw:'最新消息',
      en:'LATEST NEWS'
    }
  ])

  //最新消息
  const newsList = ref([
    {
      id:1,
      time:"2023-02-10",
      title:"醫逢甲大學衍生企業—小驢行 勇奪2022遠見CSR暨ESG企業社會責任獎",
      imageSrc:"/images/newsAndInfo/news/04_0.png"
    },
    {
      id:2,
      time:"2023-02-10",
      title:"逢甲大學衍生企業「小驢行」 獲選為2030 Excellent Impact Maker",
      imageSrc:"/images/newsAndInfo/news/03_0.png"
    },
    {
      id:3,
      time:"2023-02-10",
      title:"逢甲參與APEC研討會 分享減少浪費解方：台東1919惜食運輸接力專案",
      imageSrc:"/images/newsAndInfo/news/02_0.png"
    }
  ])
  
  //專欄
  const infoList = ref([
    {
      id:1,
      time:"2023-02-10",
      viewCount:2541,
      author:"侯勝宗",
      title:"面向高齡社會，我們需要的或許不只是高科技！",
      imageSrc:"/images/newsAndInfo/info/01_0.png"
    },
    {
      id:2,
      time:"2023-02-10",
      viewCount:3973,
      author:"侯勝宗",
      title:"讓「類火車」不再「累火車」！台東交通接駁專案給韌性城市的思考",
      imageSrc:"/images/newsAndInfo/info/05_0.png"
    },
    {
      id:3,
      time:"2023-02-10",
      viewCount:2052,
      author:"侯勝宗",
      title:"避免防疫破口，用長照專車載陽性者回家隔離吧！",
      imageSrc:"/images/newsAndInfo/info/06_0.png"
    }
  ]) 

  const renderNewsOrInfoList = computed(() => {
    if (checkedTabId.value === 1) {
      return newsList.value;
    }
    if (checkedTabId.value === 2) {
      return infoList.value;
    }
    return [];
  });

  function isClicked(tabId) {
    if (checkedTabId.value === tabId) {
      return 'block';
    } else {
      return 'hidden';
    }
  }
  
  function goNewAndInfoDetail(item){
    let type = ""
    if(checkedTabId.value===1){
      type = 'news'
    }
    if(checkedTabId.value===2){
      type = 'info'
    }
    router.push({
      path: `/informationAndNews/news/${item.id}`,
      query: {
        type: type
      }
    });
  }

  

</script>

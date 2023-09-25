<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative h-[585px] md:h-auto">
      <img class="w-full h-full object-cover md:hidden" src="~/assets/images/newsAndInfo/mobile_bg.png" alt="">
      <img class="w-full h-full hidden md:block lg:hidden" src="~/assets/images/newsAndInfo/pad_bg.png" alt="">
      <img class="w-full h-full hidden lg:block" src="~/assets/images/newsAndInfo/pc_bg.png" alt="">
      <img class="absolute center-horizontal top-25px w-30% md:(top-80px w-15%) lg:w-7%" src="~/assets/images/practiced/logo_white.png" alt="">
      <header class="mb-50px w-fit absolute center-horizontal top-50% md:(top-60% left-37%) lg:(left-20%)">
        <h2 class="text-50px break-all text-white text-center md:(text-left text-60px)">INFO/</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-50px font-medium md:text-60px">NEWS</h2>
          <h2 class="text-30px whitespace-nowrap md:text-40px">資訊專欄/重點訊息</h2>
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
          <img class="transform scale-150 transform rotate-10" src="~/assets/images/newsAndInfo/more_icon_02.png" alt="">
          <img class="transform scale-150 -rotate-5 group-hover:(rotate-5) transition" src="~/assets/images/newsAndInfo/more_icon_01.png" alt="">
        </div>
        <!-- 圖片 -->
        <template v-if="item.isLink">
          <a v-if="item.isLink" target="_blank" :href="item.isLink" class="aspect-ratio-[4/3] block border-r pr-2 pb-2 border-b border-[#3061A7] relative group cursor-pointer">
            <img class="w-full h-full object-cover" :src="item.imageSrc" alt="">
          </a>
        </template>

        <template v-if="!item.isLink">
          <div  @click="goNewAndInfoDetail(item)" class="border-r aspect-ratio-[4/3] pr-2 pb-2 border-b border-[#3061A7] relative group cursor-pointer">
            <img class="w-full h-full object-cover" :src="item.imageSrc" alt="">
          </div>
        </template>
        
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
  useSeoMeta({
    title: "資訊專欄/重點訊息- 小驢行",
    description: "資訊專欄/重點訊息- 小驢行 ",
    ogDescription: "資訊專欄/重點訊息- 小驢行 ",
    ogTitle: "資訊專欄/重點訊息- 小驢行",
  })

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
      zh_tw:'重點訊息',
      en:'LATEST NEWS'
    }
  ])

  const images = import.meta.globEager('../../assets/images/newsAndInfo/**/*.jpg')

  function getImagePath(path) {
    return images[path]?.default
  }
  //最新消息
  const newsList = ref([
    {
      id:1,
      time:"2023/07/24",
      title:"小驢行與1919食物銀行及各單位合作帶動偏鄉惜食運輸，成果至APEC國際研討會分享",
      // imageSrc:"~/assets/images/newsAndInfo/news/01.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/news/01.jpg"),
    },
    {
      id:2,
      time:"2022/12/20",
      title:"小驢行TTGO系統協助花東面對災後運輸困境",
      // imageSrc:"~/assets/images/newsAndInfo/news/02.jpg"
      imageSrc: getImagePath("../../assets/images/newsAndInfo/news/02.jpg"),
    },
    {
      id:3,
      time:"2022/12/20",
      title:"小驢行獲遠見雜誌肯定，得到2022第18屆CSR暨ESG企業社會責任獎",
      // imageSrc:"~/assets/images/newsAndInfo/news/03.jpg"
      imageSrc: getImagePath("../../assets/images/newsAndInfo/news/03.jpg"),
    },
    {
      id:4,
      time:"2021/11/24",
      title:"小驢行與產官學研一同持續倡議，成功推動偏鄉客貨共乘共載修法",
      // imageSrc:"~/assets/images/newsAndInfo/news/04.jpg"
      imageSrc: getImagePath("../../assets/images/newsAndInfo/news/04.jpg"),
    },
    {
      id:5,
      time:"2021/08/14",
      title:"小驢行與各車隊及公私部門合作，讓確診者安心隔離、安心返家",
      // imageSrc:"~/assets/images/newsAndInfo/news/05.jpg"
      imageSrc: getImagePath("../../assets/images/newsAndInfo/news/05.jpg"),
    }
  ])
  
  //專欄
  const infoList = ref([
    {
      id:1,
      time:"2023-09-12",
      viewCount:2541,
      author:"",
      title:"【即食專送】數位專題：串起偏鄉的食醫助行",
      // imageSrc:"~/assets/images/newsAndInfo/info/01.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/info/01.jpg"),
      isLink:"https://visionproject.org.tw/project/cherish-food"
    },
    {
      id:2,
      time:"2023-09-12",
      viewCount:3973,
      author:"",
      title:"【即食專送1】把城市多餘的食物送到有需要的偏鄉",
      // imageSrc:"~/assets/images/newsAndInfo/info/02.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/info/02.jpg"),
      isLink:""
    },
    {
      id:3,
      time:"2023-09-12",
      viewCount:2052,
      author:"",
      title:"【即食專送2】偏鄉中的偏鄉、資源遙不可及的南溪部落",
      // imageSrc:"~/assets/images/newsAndInfo/info/03.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/info/03.jpg"),
      isLink:""
    },
    {
      id:4,
      time:"2022/12/20",
      viewCount:4067,
      author:"",
      title:"照顧服務的新未來 銀髮管家的創新服務",
      // imageSrc:"~/assets/images/newsAndInfo/info/04.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/info/04.jpg"),
      isLink:""
    },
    {
      id:5,
      time:"2022/04/25",
      viewCount:3896,
      author:"",
      title:"今日的疫情 明日社會的新常態",
      // imageSrc:"~/assets/images/newsAndInfo/info/05.jpg",
      imageSrc: getImagePath("../../assets/images/newsAndInfo/info/05.jpg"),
      isLink:""
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

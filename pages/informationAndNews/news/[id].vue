<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative h-[585px] md:h-auto">
      <img class="w-full h-full object-cover md:hidden" src="/images/newsAndInfo/detail_bg_mobile.png" alt="">
      <img class="w-full h-full hidden md:block lg:hidden" src="/images/newsAndInfo/detail_bg_pad.png" alt="">
      <img class="w-full h-full hidden lg:block" src="/images/newsAndInfo/detail_bg_pc.png" alt="">
      <img class="absolute center-horizontal top-25px md:top-80px" src="/images/practiced/logo_white.png" alt="">
      <header class="mb-50px w-fit absolute center-horizontal top-254px md:top-380px">
        <h2 class="text-60px break-all text-white text-center md:text-left">INFO/</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-60px font-medium">NEWS</h2>
          <h2 class="text-40px">資訊專欄/最新消息</h2>
        </div>
      </header>
      <p class="absolute text-white right-10px bottom-5px">台東海岸公路</p>
    </div>

    <!-- 內容 -->
    <section class="mobile-px md:pad-px lg:pc-px lg:(flex gap-x-8 justify-between) my-15">
      <div class="mb-8 md:mb-0">
        <p class="text-[30px] text-left">{{renderData.title }}</p>
        <p class="text-[#A8A8A8] text-right">{{renderData.time }}</p>
        <template v-if="queryType==='info'">
          <div class="text-right">
            <span class="i-healthicons-eyes text-3xl text-[#3061A7]"></span>
            <span class="text-[#A8A8A8]">{{renderData.viewCount }}</span>
          </div>
        </template>
      </div>

      <div>
        <template v-if="queryType==='info'">
          <div class="hidden mx-auto mb-8 lg:(block w-300px flex flex-col gap-y-4 p-4 text-center border border-[#3061A7])">
            <div class="rounded-full m-auto w-200px h-200px border overflow-hidden flex justify-center items-center">
              <img class="w-90% rounded-full" :src="renderData.authorImg" alt="">
            </div>
            <span>{{renderData.author}}</span>
            <p>{{renderData.authorSummary}}</p>
          </div>
        </template>
        <div @click="goNewsAndInfoList()" class="w-fit m-auto cursor-pointer flex flex-col text-right transition duration-300 py-16ppx px-8px relative hover:sub-color">
          <span class="text-40px break-all">BACK TO FORM</span>
          <span class="text-2xl">回上一層</span>

          <div class="w-10px h-10px rounded-full bg-sub absolute -left-10px -top-12px transition duration-300"></div>
          
          <!-- 編匡 -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 120"
            class="absolute w-330px h-120px center-vertically transition duration-200" 
          >
            <!-- <path d="M0.5 24.3203L28.8557 0.5H340.5V140.5H28.6736H0.5V24.3203Z" fill="none" stroke="#3061A7"/> -->
             <path d="M0.5 24.3203L28.8557 0.5H330V120H28.6736H0.5V24.3203Z" fill="none" stroke="#3061A7"/>
          </svg>
        
        </div>
      </div>
    
    </section>
  </main>

</template>

<script setup>
  const route = useRoute()
  const router = useRouter()
  
  let renderData = ref({}) 
  let queryType = ref('')
  //最新消息
  const newsList = ref([
    {
      id:1,
      time:"2023-02-10",
      title:"醫逢甲大學衍生企業—小驢行 勇奪2022遠見CSR暨ESG企業社會責任獎",
      imageSrc:"/images/newsAndInfo/default.png"
    },
    {
      id:2,
      time:"2023-02-10",
      title:"逢甲大學衍生企業「小驢行」 獲選為2030 Excellent Impact Maker",
      imageSrc:"/images/newsAndInfo/default.png"
    },
    {
      id:3,
      time:"2023-02-10",
      title:"逢甲參與APEC研討會 分享減少浪費解方：台東1919惜食運輸接力專案",
      imageSrc:"/images/newsAndInfo/default.png"
    }
  ])
    
  //專欄
  const infoList = ref([
    {
      id:1,
      time:"2023-02-10",
      viewCount:2541,
      author:"侯勝宗",
      authorImg:"/images/newsAndInfo/author.png",
      authorSummary:"什麼是入世？什麼是出世？經世濟民是久遠的事？什麼是學術？什麼是學者？學術關乎社會什麼事？入世學者，跨越人文與科學，鏈結理論與實務；學者入世，用文字記錄時代，以行踐參與歷史。",
      title:"面向高齡社會，我們需要的或許不只是高科技！",
      imageSrc:"/images/newsAndInfo/default.png"
    },
    {
      id:2,
      time:"2023-02-10",
      viewCount:3973,
      author:"侯勝宗",
      authorImg:"/images/newsAndInfo/author.png",
      authorSummary:"什麼是入世？什麼是出世？經世濟民是久遠的事？什麼是學術？什麼是學者？學術關乎社會什麼事？入世學者，跨越人文與科學，鏈結理論與實務；學者入世，用文字記錄時代，以行踐參與歷史。",
      title:"讓「類火車」不再「累火車」！台東交通接駁專案給韌性城市的思考",
      imageSrc:"/images/newsAndInfo/default.png"
    },
    {
      id:3,
      time:"2023-02-10",
      viewCount:2052,
      author:"侯勝宗",
      authorImg:"/images/newsAndInfo/author.png",
      authorSummary:"什麼是入世？什麼是出世？經世濟民是久遠的事？什麼是學術？什麼是學者？學術關乎社會什麼事？入世學者，跨越人文與科學，鏈結理論與實務；學者入世，用文字記錄時代，以行踐參與歷史。",
      title:"避免防疫破口，用長照專車載陽性者回家隔離吧！",
      imageSrc:"/images/newsAndInfo/default.png"
    }
  ])

  function goNewsAndInfoList(){
    router.push('/informationAndNews')
  }

  onMounted(() => {
    const itemId = Number(route.params.id) // 轉換為數字
    queryType.value = route.query.type

    let targetList = []
    if (queryType.value === 'news') {
      targetList = newsList.value
    }
    if (queryType.value === 'info') {
      targetList = infoList.value
    }
    renderData.value = targetList.find(item => item.id === itemId) // 使用 find 方法找到匹配的項目
  })
</script>
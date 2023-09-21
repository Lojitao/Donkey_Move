<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const router = useRouter()



const partnerImgs = ref([
  "/images/index/partner/light.png",
  "/images/index/partner/1919.png",
  "/images/index/partner/taipeiHealth.png",
  "/images/index/partner/yulon.png",
  "/images/index/partner/route9.png",
])

const socialList = ref([
  {
    id: "1",
    vedioSrc:"https://www.youtube.com/embed/_JFnLwWs_Yw?si=FIwex10zQRflv4dJ",
    title: "食醫助行-台東1919惜食運輸",
    subtitle: "一趟239公里的惜食物資接力運送任務，將食物、物資及愛從高雄大寮一路送到台東長濱，支持偏鄉長輩們的生活。",
    content: "震災發生後，以服務支持在地",
    visitors: "239",
    carbonEmission: "28090",
    locate:false,
    serve:false
  },
  {
    id: "2",
    vedioSrc:"https://www.youtube.com/embed/qws6quRKui0?si=c6UhjR58W5UAS76u",
    title:"微光134行動 傳善到偏鄉守護老幼窮",
    subtitle: "高齡化的台灣，即將有134個偏鄉，面對非常嚴峻的交通接送服務的困境，留下來的居民多半行動不便，加上地處偏遠、缺乏大眾運輸，計程車也因市場機制的環境考量不太願意來。微光134再生扶助計畫，培訓偏鄉民眾成為微光駕駛。",
    content: "微光134再生扶助計畫",
    visitors: "134",
    carbonEmission: "235",
    locate:true,
    serve:true
  },
])

let checkedTabId = ref(1)
const newsAndInfoTabs = ref([
  {
    id: 1,
    zh_tw: "重點訊息",
    en: "LATEST NEWS",
  },
  {
    id: 2,
    zh_tw: "資訊專欄",
    en: "INFORMATION",
  },
])

const newsList = ref([
  {
    id: 1,
    time: "2023/07/24",
    title: "小驢行與1919食物銀行及各單位合作帶動偏鄉惜食運輸，成果至APEC國際研討會分享",
  },
  {
    id: 2,
    time: "2022/12/20",
    title: "小驢行TTGO系統協助花東面對災後運輸困境",
  },
  {
    id: 3,
    time: "2022/12/20",
    title: "小驢行獲遠見雜誌肯定，得到2022第18屆CSR暨ESG企業社會責任獎",
  },
])

const infoList = ref([
  {
    id: 1,
    time: "2023-09-12",
    title: "【即食專送】數位專題：串起偏鄉的食醫助行",
    isLink:"https://visionproject.org.tw/project/cherish-food"
  },
  {
    id: 2,
    time: "2023-09-12",
    title: "【即食專送1】把城市多餘的食物送到有需要的偏鄉",
    isLink:""
  },
  {
    id: 3,
    time: "2023-09-12",
    title: "【即食專送2】偏鄉中的偏鄉、資源遙不可及的南溪部落",
    isLink:""
  },
])

const renderNewsOrInfoList = computed(() => {
  if (checkedTabId.value === 1) {
    return newsList.value
  }
  if (checkedTabId.value === 2) {
    return infoList.value
  }
  return []
})

function goNewAndInfoDetail(item) {
  let type = ""
  if (checkedTabId.value === 1) {
    type = "news"
  }
  if (checkedTabId.value === 2) {
    type = "info"
  }
  router.push({
    path: `/informationAndNews/news/${item.id}`,
    query: {
      type: type,
    },
  })
}

// 圖片彈跳 & 數字跳動
const main = ref()
let ctx

const state = reactive({
  num1: 0,
  num2: 0,
  num3: 0,
  num4: 0,
})

onMounted(() => {
  ctx = gsap.context(() => {
    // const boxes = self.selector(".boxes")
    // boxes.forEach((box) => {
    //   gsap.to(box, {
    //     y: -100,
    //     // ease: "elastic.out(1, 0.3)",
    //     ease: "power3.inOut",
    //     scrollTrigger: {
    //       trigger: box,
    //       start: "bottom-=200 bottom",
    //       // start: "bottom bottom",
    //       end: "bottom bottom",
    //       // end: "top top",
    //       // scrub: true,
    //     },
    //   })
    // })

    // Separate ScrollTrigger for num
    gsap.to(state, {
      num1: 27000,
      num2: 1800,
      num3: 28000,
      num4: 2350000,
      scrollTrigger: {
        trigger: ".boxes",
        start: "bottom-=200 bottom",
        // start: "center bottom",
        end: "center-=120 center",
        // end: "bottom bottom",
        // scrub: true,
      },
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
})

//千分位
const formattedNum1 = computed(() => {
  return state.num1.toLocaleString()
})

const formattedNum2 = computed(() => {
  return state.num2.toLocaleString()
})

const formattedNum3 = computed(() => {
  return state.num3.toLocaleString()
})

const formattedNum4 = computed(() => {
  return state.num4.toLocaleString()
})


// 愛心順序發射
onMounted(() => {
  const tl = gsap.timeline({
    repeat: -1, // 設定為 -1 使動畫無限循環
  })

  // 從第一層愛心到第四層愛心逐一出現
  tl.to([".heart1", ".heart2", ".heart3", ".heart4"], {
    opacity: 1,
    duration: 0.5,
    stagger: 0.5,
  })
    // 從第四層愛心到第一層愛心逐一消失
    .to([".heart4", ".heart3", ".heart2", ".heart1"], {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    })
})
</script>

<template>
  <!-- Banner -->
  <section class="h-[calc(100vh-70px)] relative bg-#E0A57E lg:(h-screen)">
    <NuxtLink to="/" class="block absolute w-15% top-7% left-50% transform -translate-x-1/2 z-2 md_1024:(w-10%) lg:(w-6% top-5%)">
      <img src="/images/logo.png" alt="小驢行LOGO" class="w-full block" />
    </NuxtLink>
    <div class="w-full h-full bg-#fff rounded-b-3xl shadow-[0_8px_10px_0px_#00000040] lg:(h-screen)">
      <!-- banner run -->
      <div class="banner w-full h-full relative">
        <!-- bus run -->
        <div class="z-1 w-50% absolute top-81% left-50% transform -translate-x-1/2 md:(w-40%) md_1024:(top-72%) lg:(w-34% top-65%)">
          <img src="/images/index/bus.png" alt="巴士" class="bus block w-full" />
          <img src="/images/index/bus_tire.png" alt="巴士後輪" class="bus_tire absolute rotate-180 w-10.5% right-69.3% top-70.5%" />
          <img src="/images/index/bus_tire.png" alt="巴士前輪" class="bus_tire absolute rotate-180 w-10.5% right-9% top-70.5%" />
        </div>

        <!-- bike -->
        <img src="/images/index/bike.png" alt="腳踏車" class="block w-10% absolute top-73% left-15% md:(w-8%) md_1024:(top-70%) lg:(w-6% top-67%)" />

        <!-- car run -->
        <div class="car w-30% absolute top-77% md:(w-25%) md_1024:(top-72%) lg:(w-19% top-70%)">
          <img src="/images/index/car.png" alt="汽車" class="block w-full" />
          <img src="/images/index/car_tire.png" alt="汽車前輪" class="car_tire absolute rotate-180 w-16.5% right-72% top-53%" />
          <img src="/images/index/car_tire.png" alt="汽車後輪" class="car_tire absolute rotate-180 w-16.5% right-7.5% top-53%" />
        </div>
      </div>
    </div>
  </section>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1095" viewBox="0 0 1920 1095" fill="none">
    <g filter="url(#filter0_d_396_2286)">
      <path
        d="M0 -66V1041.84C0 1063.16 17.28 1080.44 38.6 1080.44H918.56C950.46 1075.5 935.42 1043.52 960 1043.52C984.58 1043.52 969.36 1075.51 1001.42 1080.44H1881.67C1902.99 1080.44 1920.27 1063.16 1920.27 1041.84V-66H0Z"
        fill="white"
      />
    </g>
    <defs>
      <filter id="filter0_d_396_2286" x="-10" y="-72" width="1940.27" height="1166.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_396_2286" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_396_2286" result="shape" />
      </filter>
    </defs>
  </svg> -->
  <!-- scroll gap end -->

  <!-- 關於我們 -->
  <section class="w-full h-auto pb-20 bg-#E0A57E py-60px mobile-px md:pad-px lg:(pc-px h-full)">
    <div class="h-full my-0 mx-auto flex flex-col md:(h-auto my-0 mx-auto) md_1024:(flex-row gap-50px) lg:(justify-center items-center h-full)">
      <!-- 左區塊 -->
      <div class="w-full flex flex-col items-center justify-between lg:(gap-10)">
        <!-- 標題 & 描述-->
        <div class="w-full h-480px flex flex-col gap-50px md:(gap-30px h-380px) lg:(h-full)">
          <div>
            <div class="w-full">
              <p class="text-60px text-#fff">DONKEY</p>
            </div>
            <div class="flex flex-col md:(flex-row gap-7.5) lg:(justify-start gap-5)">
              <div>
                <p class="text-60px text-#fff">MOVE</p>
              </div>
              <div class="static md:(relative)">
                <p class="text-40px text-#fff whitespace-nowrap bottom-auto md:(absolute bottom-10%)">關於我們</p>
              </div>
            </div>
          </div>

          <div class="w-full">
            <p class="text-18px text-#fff">小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</p>
          </div>
        </div>

        <!-- 圖片彈跳 & 數字跳動 -->
        <div class="w-80% flex flex-col flex-nowrap gap-y-50px justify-center items-center md:(flex-row flex-wrap gap-x-80px) lg:(h-auto)" ref="main">
          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic1.png" alt="" class="block w-90%" />
            <div class="flex flex-col gap-1 leading-50px text-xl text-center">
              <p class="whitespace-nowrap text-#fff text-xl font-semibold">媒合偏鄉車趟</p>
              <div class="text-#fff text-xl font-semibold">{{ formattedNum1 }} 次</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic2.png" alt="" class="block w-81%" />
            <div class="flex flex-col gap-1 leading-50px text-xl text-center">
              <p class="whitespace-nowrap text-#fff text-xl font-semibold">調度全台服務車輛</p>
              <div class="text-#fff text-xl font-semibold">{{ formattedNum2 }} 台</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic3.png" alt="" class="block w-98%" />
            <div class="flex flex-col gap-1 leading-50px text-xl text-center">
              <p class="whitespace-nowrap text-#fff text-xl font-semibold">促成共乘</p>
              <div class="text-#fff text-xl font-semibold">{{ formattedNum3 }} 次</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic4.png" alt="" class="block w-74%" />
            <div class="flex flex-col gap-1 leading-50px text-xl text-center">
              <p class="whitespace-nowrap text-#fff text-xl font-semibold">累積媒合</p>
              <div class="text-#fff text-xl font-semibold whitespace-nowrap">{{ formattedNum4 }} 次</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右區塊 -->
      <div class="w-full h-full relative flex flex-col gap-50px items-center md:(gap-180px) md_1024:(self-center) lg:(gap-130px self-auto)">
        <!-- 汽車 -->
        <div class="w-full h-full mt-60px">
          <img src="/images/index/about_car.png" alt="" class="block w-full" />
        </div>
        <!-- 遙控器 -->
        <div class="w-full h-full flex flex-col gap-120px items-center md:(flex-row gap-0 items-end) lg:(gap-170px)">
          <div class="w-full text-#fff text-20px font-semibold flex flex-col justify-end gap-20px lg:(w-30% justify-center)">
            <div class="tracking-17px whitespace-nowrap mx-auto my-0">
              <p>讓愛，<br />永不止息</p>
            </div>
            <div class="text-center tracking-2px whitespace-nowrap">
              <p>DonkeyMove<br />小驢行</p>
            </div>
          </div>
          <div class="w-full flex items-end justify-center relative lg:(items-center w-70%)">
            <!-- 愛心發射 -->
            <div class="heart1 absolute top--23% left-36% w-14% opacity-0 md:(w-32% top--32% left-20%) lg:(w-31%)">
              <img src="/images/index/about_heart1.png" alt="" class="block w-full" />
            </div>
            <div class="heart2 absolute top--31% left-33% w-20% opacity-0 md:(w-44% top--43% left-13%) lg:(w-42%)">
              <img src="/images/index/about_heart2.png" alt="" class="block w-full" />
            </div>
            <div class="heart3 absolute top--38% left-30% w-25% opacity-0 md:(w-58% top--52% left-5%) lg:(w-56%)">
              <img src="/images/index/about_heart3.png" alt="" class="block w-full" />
            </div>
            <div class="heart4 absolute top--52% left-24% w-35% opacity-0 md:(w-73% top--65% left--4%) lg:(w-70%)">
              <img src="/images/index/about_heart4.png" alt="" class="block w-full" />
            </div>
            <!-- 遙控器本體 -->
            <div class="w-35% md:(w-65%)">
              <img src="/images/index/about_controller.png" alt="" class="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 最新消息 -->
  <article class="mobile-px pt-6 md:pt-0 md:pad-px lg:pc-px mb-60px newbgImage md:(relative)  ">
    <div class="bg-white md:(left-0 -bottom-1px absolute px-[65px] pt-10 rounded-tr-[60px]) md_1024:(px-[20px]) lg:(px-[325px])">
      <section class="flex flex-col items-center md_1024:(flex flex-row justify-center) mb-40px">
        <div
          v-for="tab in newsAndInfoTabs"
          :key="tab.id"
          @click="checkedTabId = tab.id"
          :class="{
            'color-[#5A5657] border border-black rounded-tl-[10px] rounded-tr-[40px] rounded-br-[10px] rounded-bl-[40px]': checkedTabId === tab.id,
            'color-[#ABABAB]': checkedTabId !== tab.id,
          }"
          class="w-fit cursor-pointer flex flex-col text-50px transition duration-300 p-50px relative hover:color-[#5A5657]"
        >
          <span class="break-all">{{ tab.en }}</span>
          <span>{{ tab.zh_tw }}</span>
          <div
            :class="{ block: checkedTabId === tab.id, hidden: checkedTabId !== tab.id }"
            class="w-10px h-10px rounded-full bg-black absolute right-15px bottom-15px transition duration-300"
          ></div>
        </div>
      </section>

      <section class="flex flex-col gap-y-10 mb-4 0px">
        <div v-for="item in renderNewsOrInfoList" :key="item.id" class="border-b pb-6">
          <template v-if="!item.isLink">
            <div @click="goNewAndInfoDetail(item)" class="border-r border-b border-black rounded-br-[40px] relative group cursor-pointer pr-4">
              <span class="text-[#39383A] font-light">{{ item.time }}</span>
              <p class="text-24px font-bold">{{ item.title }}</p>
              <div class="w-fit bg-white border rounded-full border-black absolute top-0 -right-[15px] group-hover:(bg-primary text-white border-white) transition duration-200">
                <div class="i-ic-baseline-arrow-forward text-30px"></div>
              </div>
            </div>
          </template>

          <template v-if="item.isLink">
            <a target="_blank" :href="item.isLink" class="block border-r border-b border-black rounded-br-[40px] relative group cursor-pointer">
              <span class="text-[#39383A] font-light">{{ item.time }}</span>
              <p class="text-24px font-bold">{{ item.title }}</p>
              <div class="w-fit bg-white border rounded-full border-black absolute top-0 -right-[15px] group-hover:(bg-primary text-white border-white) transition duration-200">
                <div class="i-ic-baseline-arrow-forward text-30px"></div>
              </div>
            </a>
          </template>
        </div>
      </section>

      <NuxtLink
        to="/informationAndNews"
        class="w-fit mx-auto flex items-center block border bg-white px-6 py-4 rounded-full border-black text-center hover:(cursor-pointer bg-primary text-white border-white) transition duration-250 group"
      >
        <span class="text-xl">View More</span>
        <span class="i-ic-baseline-arrow-forward text-30px group-hover:(translate-x-10px text-white) duration-250 transition"></span>
      </NuxtLink>

      <!-- 弧度裝飾 -->
      <div class="hidden md:(block absolute -right-50px bottom-0)">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
          <path d="M0 0.182617V50.1826H50C22.3859 50.1826 0 27.7968 0 0.182617Z" fill="white" />
        </svg>
      </div>
    </div>
  </article>

  <!-- 社會實踐 -->
  <article class="mobile-px md:pad-px lg:pc-px mb-60px">
    <header class="mb-50px">
      <h2 class="text-60px text-#5A5657">SOCIAL</h2>
      <div class="md:(flex gap-x-4 items-baseline) text-#5A5657 font-medium">
        <h2 class="text-60px font-medium">PRACTICE</h2>
        <h2 class="text-40px">社會實踐</h2>
      </div>
    </header>

    <section class="flex flex-col items-center gap-y-8 md:(flex-row gap-x-4 items-end) lg:(w-1000px m-auto gap-x-12)">
      <div>
        <img src="/images/index/social/oldMan.png" alt="" />
      </div>
      <div class="w-full">
        <img src="/images/index/social/title_decorate.png" class="m-auto mb-6" alt="" />
        <div class="border-t-2 border-b-2 text-center border-black py-40px text-left text-justify relative">
          <span>小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</span>
          <NuxtLink
            to="/practiced"
            class="w-160px h-30px border bg-white border-black text-center absolute left-1/2 -bottom-30px -translate-1/2 lg:(hover:(cursor-pointer bg-primary text-white border-white) transition duration-250)"
          >
            more
          </NuxtLink>
        </div>
      </div>
      <div>
        <img src="/images/index/social/oldWomen.png" alt="" />
      </div>
    </section>

    <section v-for="item in socialList" :key="item.key" class="mt-100px md_1024:(flex gap-x-10 odd:flex-row-reverse)">
      <!--影片-->
      <div class="mb-58px w-full md_1024:(w-[1/2-(2.5rem/2)])">
        <div class="w-full aspect-[600/330] relative">
          <iframe
            class="absolute z-2 w-[calc(100%-15px)]"
            height="100%"
            :src="item.vedioSrc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
          <div class="w-[calc(100%-15px)] bg-sub h-full absolute right-0 -bottom-26px z-1"></div>
          <span class="block w-10px h-10px bg-sub absolute top-[calc((26px/2)-5px)] right-[calc((15px/2)-5px)] rounded-full"></span>
          <span class="block w-10px h-10px bg-sub absolute -bottom-[calc((26px/2)+5px)] left-[calc((15px/2)-5px)] rounded-full"></span>
        </div>
      </div>

      <!--文字敘述-->
      <div class="w-full md_1024:(w-[1/2-(2.5rem/2)])">
        <p class="primary font-700 text-26px mb-30px md:36px">{{ item.title }}</p>
        <p class="mb-58px">{{ item.subtitle }}</p>
        <div class="border-t border-r border-black relative h-[111px]">
          <span class="bg-white absolute text-lg -top-14px pr-10px">{{ item.content }}</span>

          <div class="text-[#91ABD0] absolute center-vertically">
            行駛<span class="text-26px">{{ item.visitors }}</span>
            <span v-if="!item.locate">公里</span>
            <span v-if="item.locate">偏鄉</span>
          </div>
          
          <template v-if="!item.serve">
            <div class="text-[#91ABD0] absolute -bottom-14px right-10px">
              總節約<span class="text-26px">{{ item.carbonEmission }}</span
              >公斤碳排放量
            </div>
          </template>
          <template v-if="item.serve">
            <div class="text-[#91ABD0] absolute -bottom-14px right-10px">
              服務<span class="text-26px">{{ item.carbonEmission }}</span
              >萬趟接送
            </div>
          </template>

         
        </div>
      </div>
    </section>
  </article>

  <!-- 合作夥伴 -->
  <article class="mobile-px md:pad-px lg:pc-px mb-14">
    <header>
      <h2 class="text-60px text-#5A5657">COOPERATE</h2>
      <div class="md:(flex gap-x-4 items-baseline) text-#5A5657 font-medium">
        <h2 class="text-60px font-medium">PARTNER</h2>
        <h2 class="text-40px">合作夥伴</h2>
      </div>
    </header>
    <section class="text-center md:(flex flex-wrap) partnerWrap">
      <div
        v-for="(imgSrc, index) in partnerImgs"
        :key="index"
        class="w-full border border-b-0 last:border-b border-#DBDBDB py-4 px-3 md:( w-[calc(50%-1.5px)] even:border-l-0) lg:( w-1/5 border-b-1 border-l-0 first:border-l flex items-center justify-center)"
      >
        <img :src="imgSrc" class="w-full" alt="" />
      </div>
    </section>
  </article>
</template>

<style scoped>
/* new bgImage */

/* banner run */
.banner {
  background: url("/images/index/city.png");
  background-repeat: repeat-x;
  animation: moveBanner 25s linear infinite;
  background-size: cover;
  overflow: hidden;
}
@keyframes moveBanner {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -3022px 0;
  }
}

/* bus */
.bus {
  animation: busShock 2s ease infinite;
}
@keyframes busShock {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(0);
  }
}
.bus_tire {
  animation: busTire 1s linear infinite;
}
@keyframes busTire {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* car */
.car {
  animation: moveCar 8s linear infinite;
}
@keyframes moveCar {
  0% {
    right: -20%;
  }
  100% {
    right: 120%;
  }
}
.scroll {
  clip-path: url(#menu);
}

@media (min-width: 768px) {
  .partnerWrap :nth-child(4) {
    border-bottom: 1px solid #dbdbdb;
  }
  .newbgImage {
    width: 100%;
    padding-top: 177%;
    background-image: url("/images/index/newsAndInfo/bg_mobile.png");
    background-repeat: no-repeat;
  }
}

@media (min-width: 1024px) {
  .newbgImage {
    width: 100%;
    padding-top: 75%;
    background-image: url("/images/index/newsAndInfo/bg_pad.png");
    background-size: cover;
  }
}

@media (min-width: 1440px) {
  .newbgImage {
    width: 100%;
    padding-top: 56.25%;
    background-image: url("/images/index/newsAndInfo/bg_pc.png");
    background-size: cover;
  }
  .banner {
    /* background-size: auto; */
    animation: moveBanner 21s linear infinite;
    background-size: cover;
  }
  @keyframes moveBanner {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -3022px 0;
    }
  }
  .bus {
    animation: busShock 2s ease infinite;
  }
  @keyframes busShock {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>

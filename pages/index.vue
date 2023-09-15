<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 圖片彈跳 & 數字跳動
const main = ref()
let ctx

const state = reactive({
  num1: 0,
  num2: 0,
  num3: 0,
  num4: 0,
})

const partnerImgs = ref([
  "/images/index/partner/light.png",
  "/images/index/partner/1919.png",
  "/images/index/partner/taipeiHealth.png",
  "/images/index/partner/yulon.png",
  "/images/index/partner/route9.png",
])

const socialList = ref(
  [
    {
      id:"1",
      vedioSrc:"www.youtube.com/embed/sNhXAxNvDTk?si=DhajX-lsTt6BXP_Z",
      title:"1919食物銀行－救減災專案 ",
      subtitle:"打造友善的叫車預約媒合服務平臺，以移動科技媒合平臺推動「1919食物銀行」以及推動共乘服務，有助減少運輸碳排放。",
      content:"震災發生後，以服務支持在地",
      visitors:"28090",
      carbonEmission:"28090"
    },
    {
      id:"2",
      vedioSrc:"www.youtube.com/embed/sNhXAxNvDTk?si=DhajX-lsTt6BXP_Z",
      title:"1919食物銀行－救減災專案 ",
      subtitle:"打造友善的叫車預約媒合服務平臺，以移動科技媒合平臺推動「1919食物銀行」以及推動共乘服務，有助減少運輸碳排放。",
      content:"震災發生後，以服務支持在地",
      visitors:"28090",
      carbonEmission:"28090"
    }
  ]
)

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector(".boxes")
    boxes.forEach((box) => {
      gsap.to(box, {
        y: -100,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: box,
          start: "bottom-=200 bottom",
          // start: "bottom bottom",
          end: "center-=150 center",
          // end: "top top",
          scrub: true,
        },
      })
    })

    // Separate ScrollTrigger for num
    gsap.to(state, {
      num1: 116565,
      num2: 116565,
      num3: 116565,
      num4: 116565,
      duration: 10,
      scrollTrigger: {
        trigger: ".boxes",
        start: "bottom-=200 bottom",
        // start: "bottom bottom",
        // end: "center-=120 center",
        end: "bottom bottom",
        scrub: true,
      },
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
})

// 愛心順序發射
onMounted(() => {
  const tl = gsap.timeline({
    repeat: -1,
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
  <section class="h-screen relative bg-#E0A57E">
    <NuxtLink to="/" class="block absolute w-15% top-7% left-50% transform -translate-x-1/2 z-2 lg:(w-6%)">
      <img src="/images/logo.png" alt="小驢行LOGO" class="w-full block" />
    </NuxtLink>
    <div class="w-full h-full bg-#fff rounded-b-3xl shadow-[0_8px_10px_0px_#00000040] lg:(h-screen)">
      <!-- banner run -->
      <div class="banner w-full h-full relative">
        <!-- bus run -->
        <div class="z-1 w-50% absolute top-81% left-50% transform -translate-x-1/2 md:(w-40%) lg:(w-34% top-62%)">
          <img src="/images/index/bus.png" alt="巴士" class="bus block w-full" />
          <img src="/images/index/bus_tire.png" alt="巴士後輪" class="bus_tire absolute rotate-180 w-10.5% right-69.3% top-70.5%" />
          <img src="/images/index/bus_tire.png" alt="巴士前輪" class="bus_tire absolute rotate-180 w-10.5% right-9% top-70.5%" />
        </div>

        <!-- bike -->
        <img src="/images/index/bike.png" alt="腳踏車" class="block w-10% absolute top-73% left-15% md:(w-8%) lg:(w-6% top-62%)" />

        <!-- car run -->
        <div class="car w-30% absolute top-77% right-5% md:(w-25%) lg:(w-19% top-66%)">
          <img src="/images/index/car.png" alt="汽車" class="block w-full" />
          <img src="/images/index/car_tire.png" alt="汽車前輪" class="car_tire absolute rotate-180 w-16.5% right-72% top-53%" />
          <img src="/images/index/car_tire.png" alt="汽車後輪" class="car_tire absolute rotate-180 w-16.5% right-7.5% top-53%" />
        </div>
      </div>
    </div>
  </section>

  <!-- scroll gap -->
  <!-- <div class="scroll absolute bottom-0 left-1/2 transform -translate-x-1/2 w-100px h-38px flex items-end justify-center bg-#E0A57E pb-1">
    <p class="text-xs text-#fff">scorll</p>
    <div class="svg-container w-0 h-0">
      <svg viewBox="0 0 202.9 10">
        <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
          <path
            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z"
          />
        </clipPath>
      </svg>
    </div>
  </div> -->
  <!-- scroll gap end -->


  <!-- 關於我們 -->
  <section class="w-full h-auto bg-#E0A57E py-60px lg:(pc-px h-screen)">
    <div class="h-full my-0 mx-auto flex flex-col md:(h-auto my-0 mx-auto) lg:(flex-row gap-50px)">
      <!-- 左區塊 -->
      <div class="w-full flex flex-col items-center justify-between md:(gap-180px) lg:(gap-150px)">
        <!-- 標題 & 描述-->
        <div class="w-full h-550px flex flex-col gap-50px md:(gap-30px h-auto)">
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
        <div class="w-80% flex flex-col flex-nowrap gap-y-50px justify-center items-center md:(flex-row flex-wrap gap-x-80px) lg:(h-auto flex-row flex-wrap gap-x-80px)" ref="main">
          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic1.png" alt="" class="block w-153px" />
            <div class="flex flex-col gap-1 leading-50px text-xl">
              <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
              <div class="text-#fff text-lg font-semibold">{{ state.num1.toFixed() }} 次</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic2.png" alt="" class="block w-137px" />
            <div class="flex flex-col gap-1 leading-50px text-xl">
              <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
              <div class="text-#fff text-lg font-semibold">{{ state.num2.toFixed() }} 次</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic3.png" alt="" class="block w-167px" />
            <div class="flex flex-col gap-1 leading-50px text-xl">
              <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
              <div class="text-#fff text-lg font-semibold">{{ state.num3.toFixed() }} 次</div>
            </div>
          </div>

          <div class="boxes flex flex-col gap-2 justify-center items-center w-34% md:(w-31%)">
            <img src="/images/index/about_cardPic4.png" alt="" class="block w-135px" />
            <div class="flex flex-col gap-1 leading-50px text-xl">
              <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
              <div class="text-#fff text-lg font-semibold">{{ state.num4.toFixed() }} 次</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右區塊 -->
      <div class="w-full h-full relative flex flex-col gap-50px items-center md:(gap-180px) lg:(gap-130px)">
        <!-- 汽車 -->
        <div class="w-full h-full">
          <img src="/images/index/about_car.png" alt="" class="block w-full" />
        </div>
        <!-- 遙控器 -->
        <div class="w-full h-full flex flex-col gap-90px items-center md:(flex-row gap-0 items-end) lg:(gap-170px)">
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
            <div class="w-40% md:(w-70%)">
              <img src="/images/index/about_controller.png" alt="" class="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 最新消息 -->
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
        <img src="/images/index/social/oldMan.png" alt="">
      </div>
      <div class="w-full">
        <img src="/images/index/social/title_decorate.png" class="m-auto mb-6" alt="">
        <div class="border-t-2 border-b-2 text-center border-black py-40px text-left text-justify relative">
          <span>小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</span>
          <div class=
            "w-160px h-30px border bg-white border-black text-center absolute left-1/2 -bottom-30px -translate-1/2 
            lg:(hover:(cursor-pointer bg-primary text-white border-white) transition duration-250)
          ">more</div>
        </div>
      </div>
      <div>
        <img src="/images/index/social/oldWomen.png" alt="">
      </div>
    </section>

    <section v-for="item in socialList" :key="item.key" class="mt-100px md_1024:(flex gap-x-10 odd:flex-row-reverse)">
      <!--影片-->
      <div class="mb-58px w-full md_1024:(w-[1/2-(2.5rem/2)])">
        <div class="w-full aspect-[600/330] relative">
          <iframe class="absolute z-2 w-[calc(100%-15px)]" height="100%" src="https://www.youtube.com/embed/sNhXAxNvDTk?si=DhajX-lsTt6BXP_Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="w-[calc(100%-15px)] bg-sub h-full absolute right-0 -bottom-26px z-1"></div>
          <span class="block w-10px h-10px bg-sub absolute top-[calc((26px/2)-5px)] right-[calc((15px/2)-5px)] rounded-full"></span>
          <span class="block w-10px h-10px bg-sub absolute -bottom-[calc((26px/2)+5px)] left-[calc((15px/2)-5px)] rounded-full"></span>
        </div>
      </div>
      <!--文字敘述-->
      <div class="w-full md_1024:(w-[1/2-(2.5rem/2)])">
        <p class="primary font-700 text-26px mb-30px md:36px">{{item.title}}</p>
        <p class="mb-58px">{{item.subtitle}}</p>
        <div class="border-t border-r border-black relative h-[111px]">
          <span class="bg-white absolute text-lg -top-14px pr-10px">{{item.content}}</span>

          <div class="text-[#91ABD0] absolute center-vertically">
            共乘<span class=" text-26px">{{item.visitors}}</span>人次
          </div>

          <div class="text-[#91ABD0] absolute -bottom-14px right-10px">
            總結約<span class=" text-26px">{{item.carbonEmission}}</span>公斤碳排放量
          </div>
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

  <section></section>
</template>

<style scoped>
@media (min-width: 768px) {
  .partnerWrap :nth-child(4) {
    border-bottom: 1px solid #dbdbdb;
  }
}

/* banner run */
.banner {
  background: url("/images/index/city.png");
  background-repeat: repeat-x;
  animation: moveBanner 15s linear infinite;
  background-size: cover;
}
@keyframes moveBanner {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -3022px 0;
    /* background-position: -1903px 0; */
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
    transform: translateY(-3px);
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
  animation: moveCar 6s linear infinite;
}
@keyframes moveCar {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}
.scroll {
  clip-path: url(#menu);
  animation: scroll 1.5s linear infinite;
}
@keyframes scroll {
  0% {
    brightness: 1.5;
    opacity: 1;
  }
  50% {
    brightness: 1;
    opacity: 0.8;
  }
  100% {
    brightness: 1.5;
    opacity: 1;
  }
}
@media (min-width: 1440px) {
  .banner {
    background-size: auto;
  }
}

</style>

<script setup>
import gsap from "gsap"

const main = ref()
let ctx

const state = reactive({
  num1: 0,
  num2: 0,
  num3: 0,
  num4: 0,
})

const partnerImgs = ref([
  '/images/index/partner/light.png',
  '/images/index/partner/1919.png',
  '/images/index/partner/taipeiHealth.png',
  '/images/index/partner/yulon.png',
  '/images/index/partner/route9.png'
])


onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector(".boxes")
    boxes.forEach((box) => {
      gsap.to(box, {
        y: -100,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "center center",
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
      scrollTrigger: {
        trigger: ".boxes",
        start: "bottom bottom",
        end: "center center",
        scrub: true,
      },
    })
  }, main.value) // <- Scope!
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>

<template>
  <section class="min-h-100vh relative bg-#E0A57E">
    <NuxtLink to="/" class="block absolute w-6% top-7% left-50% transform -translate-x-1/2 z-2">
      <img src="/images/logo.png" alt="小驢行LOGO" class="w-full block" />
    </NuxtLink>
    <div class="w-full h-screen bg-#fff rounded-b-3xl shadow-[0_8px_10px_0px_#00000040]">
      <!-- banner run -->
      <div class="banner w-full h-full relative">

        <!-- bus run -->
        <div class="z-1 w-40% absolute top-60% left-50% transform -translate-x-1/2">
          <img src="/images/index/bus.png" alt="巴士" class="bus block w-full" />
          <img src="/images/index/bus_tire.png" alt="巴士後輪" class="bus_tire absolute rotate-180 w-10.5% right-69.3% top-70.5%" />
          <img src="/images/index/bus_tire.png" alt="巴士前輪" class="bus_tire absolute rotate-180 w-10.5% right-9% top-70.5%" />
        </div>

        <!-- bike -->
        <img src="/images/index/bike.png" alt="腳踏車" class="block w-6% absolute top-62% left-15%" />

        <!-- car -->
        <div class="car w-19% absolute top-70% right-5%">
          <img src="/images/index/car.png" alt="汽車" class="block w-full" />
          <img src="/images/index/car_tire.png" alt="汽車前輪" class="car_tire absolute rotate-180 w-16.5% right-72% top-53%" />
          <img src="/images/index/car_tire.png" alt="汽車後輪" class="car_tire absolute rotate-180 w-16.5% right-7.5% top-53%" />
        </div>

        <!-- motorcycle -->
        <!-- <img src="/images/index/motorcycle.png" alt="摩托車" class="motorcycle block w-11% absolute top-80% left-5%" /> -->
      </div>
    </div>
  </section>

  <!-- scroll gap -->
  <div class="scroll absolute bottom-0 left-1/2 transform -translate-x-1/2 w-100px h-38px flex items-end justify-center bg-#E0A57E pb-1">
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
  </div>
  <!-- scroll gap end -->

  <section class="w-full h-screen bg-#E0A57E flex justify-around">
    <!-- left -->
    <div class="w-full h-full flex flex-col border-solid border items-center border border-solid border-#000 justify-between">
      <div class="w-80% h-150px flex flex-col gap-1 border border-solid">
        <p class="text-50px text-#fff">DONKEY</p>
        <div class="flex justify-start gap-5">
          <div>
            <p class="text-50px text-#fff">MOVE</p>
          </div>
          <div class="relative">
            <p class="text-30px text-#fff absolute bottom-10% whitespace-nowrap">關於我們</p>
          </div>
        </div>
      </div>

      <div class="w-80% h-40px">
        <p class="text-18px text-#fff">小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</p>
      </div>

      <!-- gsap & number change -->
      <div class="w-400px h-400px flex flex-wrap gap-7.5 justify-center items-center" ref="main">
        <div class="boxes flex flex-col gap-2 justify-center items-center w-180px leading-180px">
          <img src="/images/index/cardPic1.png" alt="" class="block w-153px" />
          <div class="flex flex-col gap-1 leading-50px text-xl">
            <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
            <div class="text-#fff text-lg font-semibold">{{ state.num1.toFixed() }} 次</div>
          </div>
        </div>
        <div class="boxes flex flex-col gap-2 justify-center items-center w-180px leading-180px">
          <img src="/images/index/cardPic2.png" alt="" class="block w-137px" />
          <div class="flex flex-col gap-1 leading-50px text-xl">
            <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
            <div class="text-#fff text-lg font-semibold">{{ state.num2.toFixed() }} 次</div>
          </div>
        </div>
        <div class="boxes flex flex-col gap-2 justify-center items-center w-180px leading-180px">
          <img src="/images/index/cardPic3.png" alt="" class="block w-167px" />
          <div class="flex flex-col gap-1 leading-50px text-xl">
            <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
            <div class="text-#fff text-lg font-semibold">{{ state.num3.toFixed() }} 次</div>
          </div>
        </div>
        <div class="boxes flex flex-col gap-2 justify-center items-center w-180px leading-180px">
          <img src="/images/index/cardPic4.png" alt="" class="block w-135px" />
          <div class="flex flex-col gap-1 leading-50px text-xl">
            <p class="whitespace-nowrap text-#fff text-lg font-semibold">總趟次</p>
            <div class="text-#fff text-lg font-semibold">{{ state.num4.toFixed() }} 次</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="w-full h-full relative border-solid border  -red"></div>
  </section>

  <!-- 最新消息 -->
  <!-- 社會實踐 -->
  <article class="mobile-px md:pad-px lg:pc-px mb-14">
    <header>
      <h2 class="text-60px text-#5A5657">SOCIAL</h2>
      <div class="md:(flex gap-x-4 items-baseline) text-#5A5657 font-medium">
        <h2 class="text-60px font-medium">PRACTICE</h2>
        <h2 class="text-40px">社會實踐</h2>
      </div>
    </header>

    <section class="flex flex-col items-center gap-y-10">
      <div>
        <img src="/images/index/social/oldMan.png" alt="">
      </div>
      <div class="w-full">
        <img src="/images/index/social/title_decorate.png" class="m-auto mb-6" alt="">
        <div class="border-t-2 border-b-2 text-center border-black py-40px text-left text-justify">
          <span>小驢行以媒合平台改善台灣高齡、偏鄉交通環境，不只受各方肯定及協力報導倡議，做法也可複製可仿效，可做為高齡與偏鄉服務的典範。</span>
        </div>
      </div>
      <div>
        <img src="/images/index/social/oldWomen.png" alt="">
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
      <div v-for="(imgSrc,index) in partnerImgs" :key="index"
        class="
          w-full border border-b-0 last:border-b border-#DBDBDB py-4 px-3
          md:( w-[calc(50%-1.5px)] even:border-l-0)
          lg:( w-1/5 border-b-1 border-l-0 first:border-l flex items-center justify-center)
        "
      >
        <img :src="imgSrc" class="w-full" alt="">
      </div>
    </section>
  </article>

  <section>
   

  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .partnerWrap :nth-child(4) {
    border-bottom: 1px solid #DBDBDB;
  }
}


/* banner run */
.banner {
  background: url("/images/index/city.png");
  background-repeat: repeat-x;
  animation: moveBanner 15s linear infinite;
  /* background-size: cover;  */
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
/* .car_tire {
  animation: carTire 1s linear infinite;
} */
/* @keyframes carTire {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
} */

/* motorcycle */
.motorcycle {
  animation: motorcycleMove 3s linear infinite;
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
</style>

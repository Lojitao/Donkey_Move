<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative">
      <img src="/images/project/mobile_bg.png" alt="" class="w-full md:hidden" />
      <img src="/images/project/pad_bg.png" alt="" class="w-full hidden md:block lg:hidden" />
      <img src="/images/project/pc_bg.png" alt="" class="w-full hidden lg:block" />
      <img src="/images/project/logo_white.png" alt="" class="absolute center-horizontal top-40px w-115px md:(top-80px)" />
      <header class="mb-50px w-fit absolute center-horizontal top-254px md:(top-320px absolute left-30%) md_1024:(top-400px) lg:(left-20%)">
        <h1 class="text-50px break-all text-white text-center md:(text-left text-60px)">DONKEY</h1>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-50px font-medium md:(text-60px)">PROJECT</h2>
          <h3 class="text-30px md:(whitespace-nowrap text-40px)">公司實績</h3>
        </div>
      </header>
    </div>

    <section class="background w-full h-full py-60px mobile-px md:pad-px lg:(pc-px h-full py-120px)">
      <h4 class="text-28px text-center font-bold md:(text-40px) md_1024:(whitespace-nowrap text-38px) lg:(text-40px)">
        全台最大
        <p class="text-32px md:(text-64px) lg:(inline)">「無障礙福祉車輛」</p>
        派遣媒合平台
      </h4>
      <div class="flex flex-col gap-5 items-center justify-center my-60px mx-auto w-full md_1024:(flex-row w-85%)">
        <div class="w-40% md:(w-20%) md_1024:(w-full)">
          <img src="/images/project/logo_circle.png" alt="" class="block lg:(w-280px)" />
        </div>
        <p class="text-18px text-justify md:(text-22px)">
          小驢行創立共享長照交通平台，幫助偏鄉長者及弱勢族群接送，提供不同的服務模式。服務更延伸至「食醫助行」，從食物輸送、採購日常用品到醫療照服員，讓最末端的獨居或偏鄉長者完成日常生活需求。小驢行團隊不只是運將，更是在地導覽員，幫助偏鄉的同時，也讓在地有創生機會。
        </p>
      </div>
      <!-- 基本資料和實績 -->
      <div class="flex flex-col gap-50px mx-auto w-full md:(flex-row justify-between) md_1024:(w-90%)">
        <div class="flex flex-col gap-2.5">
          <p class="text-24px font-bold text-#333 lg:(text-36px)">公司基本資料</p>
          <div class="w-full">
            <img src="/images/project/basic_information.png" alt="" class="block w-full">
          </div>
        </div>

        <div class="flex flex-col gap-2.5">
          <p class="text-24px font-bold text-#333 lg:(text-36px)">２０２２年實績</p>
          <div class="w-full">
            <img src="/images/project/achievements.png" alt="" class="block w-full">
          </div>
        </div>
      </div>
      <!-- 20年磨一劍 -->
      <div class="my-60px mx-auto w-full md:(my-120px) md_1024:(w-90%)">
        <h5 class="text-32px font-bold text-#333 md:(text-64px)">20年磨一劍</h5>
        <p class="text-22px mb-15px text-#333 md:(text-30px)">從學術研究到社會實踐的成果</p>
        <div class="w-full">
          <img src="/images/project/route.png" alt="" class="block w-full">
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.background {
  background: url("/images/project/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

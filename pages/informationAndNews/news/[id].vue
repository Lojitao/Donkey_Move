<template>
  <main class="min-h-screen">
    <!-- banner -->
    <div class="relative h-[585px] md:h-auto">
      <img class="w-full h-full object-cover md:hidden" src="/images/newsAndInfo/details_bg_mobile.png" alt="">
      <img class="w-full h-full hidden md:block lg:hidden" src="/images/newsAndInfo/details_bg_pad.png" alt="">
      <img class="w-full h-full hidden lg:block" src="/images/newsAndInfo/details_bg_pc.png" alt="">
      <img class="absolute center-horizontal top-25px w-30% md:(top-80px w-15%) lg:w-7%" src="/images/practiced/logo_white.png" alt="">
      <header class="mb-50px w-fit absolute center-horizontal top-50% md:(top-60% left-37%) lg:(left-20%)">
        <h2 class="text-50px break-all text-white text-center md:(text-left text-60px)">INFO/</h2>
        <div class="md:(flex gap-x-4 items-baseline) text-white text-center font-medium">
          <h2 class="text-50px font-medium md:text-60px">NEWS</h2>
          <h2 class="text-30px whitespace-nowrap md:text-40px">資訊專欄/重點訊息</h2>
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
        <section>
          <div v-html="renderData.content"></div>
        </section>
      </div>

      <div class="flex-shrink-0">
        <template v-if="queryType==='info' && renderData.author">
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
      time:"2023/07/24",
      title:"小驢行與1919食物銀行及各單位合作帶動偏鄉惜食運輸，成果至APEC國際研討會分享",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<p class="mb-20px">亞太經濟合作(APEC)組織之2023年「強化APEC糧食體系、數位化與創新科技以降低糧損與食物浪費」研討會於7月20-21日在台北展開，計有近150名國際學者及代表參與。本校公共事務與社會創新碩士在職學位學程侯勝宗特聘教授以「Innovative digital solutions MaaSS &ndash; An Inclusive mobility solution for on-demand food delivery and social resilience」為題，介紹台灣獨特的偏鄉惜食物資接力創新模式。</p>
        <img alt="侯勝宗老師在APEC(亞太經濟合作)研討會中介紹台灣獨特的偏鄉惜食物資接力創新模式。" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24140851/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%9C%A8APEC%E4%BA%9E%E5%A4%AA%E7%B6%93%E6%BF%9F%E5%90%88%E4%BD%9C%E7%A0%94%E8%A8%8E%E6%9C%83%E4%B8%AD%E4%BB%8B%E7%B4%B9%E5%8F%B0%E7%81%A3%E7%8D%A8%E7%89%B9%E7%9A%84%E5%81%8F%E9%84%89%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%89%B5%E6%96%B0%E6%A8%A1%E5%BC%8F%E3%80%82.jpg" srcset="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24140851/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%9C%A8APEC%E4%BA%9E%E5%A4%AA%E7%B6%93%E6%BF%9F%E5%90%88%E4%BD%9C%E7%A0%94%E8%A8%8E%E6%9C%83%E4%B8%AD%E4%BB%8B%E7%B4%B9%E5%8F%B0%E7%81%A3%E7%8D%A8%E7%89%B9%E7%9A%84%E5%81%8F%E9%84%89%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%89%B5%E6%96%B0%E6%A8%A1%E5%BC%8F%E3%80%82.jpg 900w, https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24140851/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%9C%A8APEC%E4%BA%9E%E5%A4%AA%E7%B6%93%E6%BF%9F%E5%90%88%E4%BD%9C%E7%A0%94%E8%A8%8E%E6%9C%83%E4%B8%AD%E4%BB%8B%E7%B4%B9%E5%8F%B0%E7%81%A3%E7%8D%A8%E7%89%B9%E7%9A%84%E5%81%8F%E9%84%89%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%89%B5%E6%96%B0%E6%A8%A1%E5%BC%8F%E3%80%82-150x100.jpg 150w" style="width: 100%;" />
        <p class="mb-20px">侯勝宗老師在APEC(亞太經濟合作)研討會中介紹台灣獨特的偏鄉惜食物資接力創新模式。</p>
        <br />
        <img alt="侯勝宗老師(右四)參加APEC研討會，和與會學者、合作機構人員合影。" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141130/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%8F%B3%E5%9B%9B%E5%8F%83%E5%8A%A0APEC%E7%A0%94%E8%A8%8E%E6%9C%83%EF%BC%8C%E5%92%8C%E8%88%87%E6%9C%83%E5%AD%B8%E8%80%85%E3%80%81%E5%90%88%E4%BD%9C%E6%A9%9F%E6%A7%8B%E4%BA%BA%E5%93%A1%E5%90%88%E5%BD%B1%E3%80%82.jpg" srcset="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141130/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%8F%B3%E5%9B%9B%E5%8F%83%E5%8A%A0APEC%E7%A0%94%E8%A8%8E%E6%9C%83%EF%BC%8C%E5%92%8C%E8%88%87%E6%9C%83%E5%AD%B8%E8%80%85%E3%80%81%E5%90%88%E4%BD%9C%E6%A9%9F%E6%A7%8B%E4%BA%BA%E5%93%A1%E5%90%88%E5%BD%B1%E3%80%82.jpg 900w, https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141130/%E4%BE%AF%E5%8B%9D%E5%AE%97%E8%80%81%E5%B8%AB%E5%8F%B3%E5%9B%9B%E5%8F%83%E5%8A%A0APEC%E7%A0%94%E8%A8%8E%E6%9C%83%EF%BC%8C%E5%92%8C%E8%88%87%E6%9C%83%E5%AD%B8%E8%80%85%E3%80%81%E5%90%88%E4%BD%9C%E6%A9%9F%E6%A7%8B%E4%BA%BA%E5%93%A1%E5%90%88%E5%BD%B1%E3%80%82-150x100.jpg 150w" style="width: 100%;" />
        <p class="mb-20px">侯勝宗老師(右四)參加APEC研討會，和與會學者、合作機構人員合影。</p>

        <p>&nbsp;</p>

        <p class="mb-20px">侯老師投入台東偏鄉移動研究，發動了一個長達239公里的「食醫助行」惜食物資接力實驗方案，邀請小驢行股份有限公司(逢甲大學衍生企業)、裕隆集團、1919食物銀行(中華基督教救助協會)、台灣微光行動協會和南迴健康促進關懷協會等五方協力合作，以三段式接力，將高雄的某美式大賣場惜食物資，沿著台東最南端的達仁鄉送到最北端的長濱鄉南溪部落，做為文健站老人共餐和教會兒童課輔班的營養晚餐。</p>

        <p class="mb-20px">偏鄉「食醫助行」移動創新方案，不只包含高齡長者就醫，還需要用最短時間，將即將過期的(實)食物，送往原偏鄉做為社會救助物資，同時搶救食物和貧窮，主要分成三階段的接力方式：</p>

        <p class="mb-20px">第一段物資接力：從高雄出發，將來自大賣場的惜食，用冷涷卡車在屏東與台東交界的南迴公路雙流落部進行「貨不落地」車對車接力運輸，由另一台冷涷卡車接手送往台東市1919物流倉庫。同一時間，南迴健康促進關懷協會也派了一台七人座小車來接收惜食，由他們直接將食物送往達仁鄉各文健站，做為長者共餐之用。</p>

        <p class="mb-20px">第二段物資接力：善用要前往成功鎮接送長者就醫之長照特約空車，將重達數百公斤的常溫食品和部份冷涷食品放在車用冰箱內，從台東市倉庫經由台11海線，送給沿途約九家的教會服務中心，做為兒童課輔班的營養晚餐或供應給部落文健站。</p>

        <p class="mb-20px">第三段就醫接力：之後，這台特約長照車輛，回程再載送偏鄉部落民眾下山前往台東市區就醫，充份發揮偏鄉交通的多元運輸功能，減少回頭空車與碳排放。</p>
        <img alt="惜食物資接力過程紀錄。" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141424/%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E9%81%8E%E7%A8%8B%E7%B4%80%E9%8C%84%E3%80%82.jpg" srcset="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141424/%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E9%81%8E%E7%A8%8B%E7%B4%80%E9%8C%84%E3%80%82.jpg 900w, https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141424/%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E9%81%8E%E7%A8%8B%E7%B4%80%E9%8C%84%E3%80%82-150x100.jpg 150w" style="width: 100%;" />
        <p class="mb-20px">惜食物資接力過程紀錄。</p>

        <p>&nbsp;</p>

        <p class="mb-20px">「食醫助行」移動創新方案，結合跨部會的公部門預算與企業ESG資源，改善原偏鄉長期因為缺乏公眾運輸的「貨進人出」移動困境，同時也減少食物的浪費，藉由這次的APEC食物浪費國際會議，讓世界看見台灣獨特的偏鄉創新與人文關懷。</p>

        <p class="mb-20px"><img alt="" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141545/%E4%BE%AF%E8%80%81%E5%B8%AB%E5%8F%B3%E4%B8%89%E8%88%87%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%9C%98%E9%9A%8A%E5%90%88%E5%BD%B1%E3%80%82.jpg" srcset="https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141545/%E4%BE%AF%E8%80%81%E5%B8%AB%E5%8F%B3%E4%B8%89%E8%88%87%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%9C%98%E9%9A%8A%E5%90%88%E5%BD%B1%E3%80%82.jpg 900w, https://s3.ap-southeast-1.amazonaws.com/web-content.fcu.edu.tw/wp-content/uploads/2023/07/24141545/%E4%BE%AF%E8%80%81%E5%B8%AB%E5%8F%B3%E4%B8%89%E8%88%87%E6%83%9C%E9%A3%9F%E7%89%A9%E8%B3%87%E6%8E%A5%E5%8A%9B%E5%9C%98%E9%9A%8A%E5%90%88%E5%BD%B1%E3%80%82-150x84.jpg 150w" style="width: 100%;" /></p>
        `
    },
    {
      id:2,
      time:"2022/12/20",
      title:"小驢行TTGO系統協助花東面對災後運輸困境",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<figure><img alt="圖說：幸福輪轉手化身TTGO專車，提供玉里至富里間往返交通服務。 圖／裕隆集團 ..." src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/19/0/19709115.jpg&amp;x=0&amp;y=0&amp;sw=0&amp;sh=0&amp;sl=W&amp;fw=1050" style="width: 100%;" title="圖說：幸福輪轉手化身TTGO專車，提供玉里至富里間往返交通服務。 圖／裕隆集團 ..." />
        <figcaption>圖說：幸福輪轉手化身TTGO專車，提供玉里至富里間往返交通服務。 圖／裕隆集團 提供</figcaption>
        </figure>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px">918震災後，台鐵花東段受損中斷，透過搶修，玉里與富里間依然要靠公路接駁。因此，火車抵達玉里站後，只見車門一開，乘客蜂湧而出，紛紛趕著到櫃台購買區間車票，然後排隊等待接駁至臺東富里的客運，返鄉的臺東民眾，有的拎著大包小包的行李、有的帶著小孩，要上下月台、要去買票、排隊、再搬行李上車轉乘&hellip;&hellip;返鄉的路不但曲折，且要花費更多時間，若再遇到火車誤點，回到<a class="color-blue" href="https://ubrand.udn.com/search/tagging/8006/%E5%AE%B6" rel="147738"><strong>家</strong></a>都已經三更半夜。</p>

        <p class="mb-20px">因此，在TTGO上路後，可以發現坐上TTGO的乘客，臉上都帶著鬆了一口氣的表情，受訪時幾乎都說「不用上車下車一直轉乘，真的方便很多！」而且可以直達到家門口。因為TTGO是車站到住宅（station-to-door）和住宅到車站（door-to-station）的服務，滿足最後一哩路的方式為玉里到富里之間往返的民眾，帶來比以往還要便利的<a class="color-blue" href="https://ubrand.udn.com/search/tagging/8006/%E4%BA%A4%E9%80%9A" rel="193151"><strong>交通</strong></a>方式。</p>

        <p class="mb-20px">TTGO究竟有多神奇，讓民眾如此稱讚？事實上，TTGO是臺東縣政府為解決花東觀光交通而正在籌備的方案，因應在此次災後復原，提前上場，在原本基礎下建置「花東溫馨接送預約媒合服務」，由國發會提供經費、臺東縣政府與公路總局執行、逢甲大學衍生企業小驢行社企規劃研發、裕融企業免費提供車輛租賃服務的TTGO，透過兩個多月來的運行，不但為地震造成的交通黑暗期帶來曙光，為偏鄉交通問題帶來解方，更是結合產官學界，建立公私協力的典範。</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><b>交通不便，觀光產業瞬間熄火</b></p>

        <p class="mb-20px">918地震當天的餘悸猶存，當時媒體與大眾都將焦點放在花蓮南區的災情，一個禮拜後，才發現臺東所受到的影響不輸災區。因為鐵路的中斷，縣民的對外交通成本大幅提升，到宜蘭來回都要花超過6個小時。</p>

        <p class="mb-20px">旅客更因為不便而取消行程，「有人搶到池上秋收的票，因為交通問題想要放棄，而旅宿業更面對旅客退房的壓力，整個觀光產業受到非常大的波及。」臺東縣交通及觀光發展處長余明勳說，他表示當時雖然公路總局與臺鐵陸續安排類火車的運輸，但要當場購票再轉乘，還提著行李上下車；此外，若火車誤點，就趕不上客運班次&hellip;&hellip;種種顛簸，使<a class="color-blue" href="https://ubrand.udn.com/search/tagging/8006/%E8%A7%80%E5%85%89%E5%AE%A2" rel="192582"><strong>觀光客</strong></a>的流量瞬間減少，而縣民們則明顯感到出行不便。</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><b>TTGO提前登場，公私協力迅速完成建置</b></p>

        <p class="mb-20px">當下臺東縣政府的當務之急，便是改善交通接駁。於是「TTGO 交通預約媒合平台：臺東慢經濟觀光服務應用計畫」臨危受命，希望能緊急修改系統，加入救災功能。TTGO是由逢甲大學衍生企業小驢行社企侯勝宗教授負責系統規劃與開發，為偏鄉交通尋找解決方案多年的他，立刻就有了新計畫的雛形，並與縣府人員分頭展開<a class="color-blue" href="https://ubrand.udn.com/search/tagging/8006/%E8%A1%8C%E5%8B%95" rel="147872"><strong>行動</strong></a>。</p>

        <p class="mb-20px">侯勝宗先開始找車，在獲得<a class="color-blue" href="https://ubrand.udn.com/search/tagging/8006/%E8%A3%95%E9%9A%86" rel="173549"><strong>裕隆</strong></a>集團口頭承諾支援20輛車後，臺東縣政府帶著「人本交通，韌性城鄉：花東溫馨接送預約媒合服務」提案至國發會報告，由於災後復原狀況緊急，提案迅速審核通過。而執行的一端，如系統、車輛、司機、調度以及縣府人員等每個環節，都盡最大努力希望能使TTGO盡快上路，最後，非常有效率的在10月12日正式啟動。</p>

        <p>&nbsp;</p>

        <figure><img alt="逢甲大學衍生企業小驢行社企侯勝宗教授長期關注偏鄉交通問題，並促成產官學各界，共同..." src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/19/0/19709116.jpg&amp;x=0&amp;y=0&amp;sw=0&amp;sh=0&amp;sl=W&amp;fw=1050" style="width: 100%;" title="逢甲大學衍生企業小驢行社企侯勝宗教授長期關注偏鄉交通問題，並促成產官學各界，共同..." />
        <figcaption>逢甲大學衍生企業小驢行社企侯勝宗教授長期關注偏鄉交通問題，並促成產官學各界，共同解決偏鄉就醫、就養與就業問題。 圖／張皓婷 攝影</figcaption>
        </figure>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><b>幸福輪轉手再展開，從就醫到救災</b></p>

        <p class="mb-20px">車輛與司機是整個計畫的主體，侯勝宗在第一時間就向合作多年的裕融企業提出車輛需求，裕融企業副總經理林群盛收到訊息後，立刻整合集團資源，「過程中一定會遭遇很多行政流程與法規限制，但因為救災為先，我們可以說緊急動員，在最快時間內解決相關問題，並完成全省車輛調度工作，而因為公路也受損，大型運輸車輛無法進入花東，還請各地的同仁加班把車開過去。」林群盛表示，這次裕融企業也是採取「捐服務」的模式，包括20輛車的使用與維修，由格上租車臺東站協力車隊後勤與緊急調度，站點負責人利用line群組隨時回應司機們各項諮詢。</p>

        <p class="mb-20px">找司機也不是一件容易的事情，在資格上需要良民證、職業駕照，司機本人也要能接受車隊的文化與規定。侯勝宗請來新北市微光計畫中的車隊指揮王俊凱，希望利用他的經驗協助車隊調度與訓練。</p>

        <p>&nbsp;</p>

        <figure><img alt="王俊凱從北部趕赴臺東，接下車隊的招募與訓練工作。 圖／裕隆集團 提供" src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/19/0/19709117.jpg&amp;x=0&amp;y=0&amp;sw=0&amp;sh=0&amp;sl=W&amp;fw=1050" style="width: 100%;" title="王俊凱從北部趕赴臺東，接下車隊的招募與訓練工作。 圖／裕隆集團 提供" />
        <figcaption>王俊凱從北部趕赴臺東，接下車隊的招募與訓練工作。 圖／裕隆集團 提供</figcaption>
        </figure>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px">王俊凱表示剛開始找司機非常困難，一開始只有一兩位司機主動加入，後來確認了薪資，並且保證雇用到一月底，人員才陸續到位，並於10月底招滿，現在全車隊有27位司機，都是花東在地人，由於觀光受損，可以看出大部分車隊人員是因為本業受影響，少了收入、有了時間，像是有些計程車司機剛好藉此機會多一份收入；也有民宿老闆娘，因為住客減少，也成為車隊一員；還有飯店服務員特別去換考職業駕照來加入，「我們都會鼓勵大家多上班，如果每個月做20天基本薪資都有5萬。我們也在當地招募調度人員並且幫忙訓練，若未來車隊的計畫可繼續營運下去，就可以創造當地就業機會。」王俊凱說。也可以說TTGO不但是一種交通接駁方式，更兼具創造就業、活化地方的任務。</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><b>當計畫成為行動，讓更多人看見可能性</b></p>

        <p class="mb-20px">車輛按表出班，但狀況則不定時發生，隨時得滾動性修正各種做法。例如從臺東往玉里車站的接客方式，從住家改為定點接，更為順暢有效率；又例如長者不會使用網站，因此開通了電話預約服務等，這些措施的修正都是大家每天工作結束後，討論到深夜的成果。雖然期間非常辛苦，但余明勳指出，透過這次實際上場操兵，獲得了極為珍貴的經驗，當災後復原結束後，不但可以優化原本TTGO的系統，更可傳承至南迴、東海岸，甚至全省。國發會也在此次行動中，看見TTGO的成果，未來將有機會納入地方創生政策中，成為偏鄉交通問題的解決方案。</p>

        <p>&nbsp;</p>

        <figure><img alt="部分民眾不熟悉網路平台，還是需要電話預約。 圖／裕隆集團 提供" src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/19/0/19709118.jpg&amp;x=0&amp;y=0&amp;sw=0&amp;sh=0&amp;sl=W&amp;fw=1050" style="width: 100%;" title="部分民眾不熟悉網路平台，還是需要電話預約。 圖／裕隆集團 提供" />
        <figcaption>部分民眾不熟悉網路平台，還是需要電話預約。 圖／裕隆集團 提供</figcaption>
        </figure>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px">雖然臺鐵臺東線將於12月底搶通，但「TTGO花東溫馨接送」計畫持續營運到1月底，配合臺鐵運量改善狀態而逐步退場。不過，目前臺東縣政府已經開始下一階段的計畫，而臺東民眾們更是引頸期盼，「這次TTGO只有行駛縱谷線，其他地區的民眾非常羨慕，也希望政府可以開辦。」余明勳說，未來TTGO將持續發展成跨運具、跨鄉鎮的共乘運輸工具，並將結合幸福巴士、幸福小黃與噗噗共乘等系統，提供更多元的服務。&emsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><b>解決偏鄉交通移動問題的新思考</b></p>

        <p class="mb-20px">而以FaaS （Financing as a Service）理念投入偏鄉交通公益服務的裕融企業，從2016年FaaS 1.0「行動無礙：新北無障礙接送」至2019年FaaS 2.0「幸福輪轉手：南迴公益交通專案」，至今年FaaS 3.0的「花木蘭：社會共融永續專案」，以及臺東TTGO救災行動，每一次也都收穫經驗，並且看見更多需求，因此裕融企業不斷提出更落地的解決方案，例如捐服務不捐車的創新思維，實踐了CSI（Corporate Social Investment，企業社會投資）、以公益創新帶動產業發展效益的成果。下一個里程碑，林群盛表示，整個裕隆集團在思考的是「如何讓更多人來參與？如何更加擴大效益？」</p>

        <p>&nbsp;</p>

        <figure><img alt="裕融企業副總經理林群盛從每次行動中向專家取經，成為未來FasS 發展的養分。 圖..." src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/19/0/19709119.jpg&amp;x=0&amp;y=0&amp;sw=0&amp;sh=0&amp;sl=W&amp;fw=1050" style="width: 100%;" title="裕融企業副總經理林群盛從每次行動中向專家取經，成為未來FasS 發展的養分。 圖..." />
        <figcaption>裕融企業副總經理林群盛從每次行動中向專家取經，成為未來FasS 發展的養分。 圖／張皓婷 攝影</figcaption>
        </figure>

        <p>&nbsp;</p>

        <p>&nbsp;</p>

        <p class="mb-20px">無論是花木蘭或者TTGO的精髓，都是搭建體系，接著才能進一步複製推廣，因為「一個集團的力量相對還是有上限，我們的力量可能只能照顧3個偏鄉，但有更多人一起參與，我們有可能照顧30個偏鄉。」林群盛說，他並且表示，「以移動創新，為臺灣在地思考解方，一直是裕隆集團的DNA。明年，集團將推出『愛的里程數』平台，這就是建立模式擴大效益的創新解決方案，而裕融也將秉持這樣的精神，帶動更多企業或個人，共同進行改善偏鄉交通的永續服務。」而對於裕融企業而言，追隨裕隆集團ESG的理念，將能進一步完成融資不僅僅只是借與貸，而是對普羅大眾及中小企業用心服務，甚至回饋的承諾。</p>`
    },
    {
      id:3,
      time:"2022/12/20",
      title:"小驢行獲遠見雜誌肯定，得到2022第18屆CSR暨ESG企業社會責任獎",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<img data-ll-status="loaded" data-src="https://csrone.com/api/img/upload/articles/4fpDtHsAfwBYBCPhkl76fniyxps7U0mMrYpce18u.jpg?w=718" loading="lazy" src="https://csrone.com/api/img/upload/articles/4fpDtHsAfwBYBCPhkl76fniyxps7U0mMrYpce18u.jpg?w=718" style="width: 100%;" />
        <p class="mb-20px">（2022第18屆《遠見》CSR暨ESG企業社會責任獎紀念合照）</p>

        <p>&nbsp;</p>

        <p class="mb-20px">《遠見》於2005年首創全球華人媒體CSR評鑑，帶動企業界與國際標準接軌，並見證台灣企業履行社會責任的進步。2022年邁入第18屆，正式定名為「《遠見》CSR暨ESG企業社會責任獎」，今（3）日正式揭曉成績。最大贏家為遠東集團，旗下四家企業共抱回五項獎座。</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><img alt="遠東集團受獎" src="https://s3.csrone.com/ckfinder/images/%E9%81%A0%E6%9D%B1SOGO.JPG" style="width: 100%;" /><br />
        （遠東集團旗下四家企業共抱回五項獎座）</p>

        <p>&nbsp;</p>

        <p class="mb-20px">次高的是富邦集團，旗下三家企業共獲三獎，加上台灣大哥大今年開始名列年度榮譽榜，總計四項獎座。國泰集團旗下兩家企業加上國泰金控的年度榮譽榜，共取得三項獎座；單一企業以統一超商贏得三項最多；台灣水泥、中華電信、遠東新世紀各拿下兩獎，玉山金控與玉山銀行合計兩獎。鴻海精密工業首次獲得綜合績效電子科技業首獎、中鼎工程公司則首度獲綜合績效服務業首獎。</p>

        <p>&nbsp;</p>

        <h2 class="text-30px"><strong>連三年綜合績效掄元 國泰金、台灣大列年度榮譽榜</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">《遠見》CSR暨ESG企業社會責任獎，向來以「低獲獎率、高榮譽度」聞名，選拔過程嚴謹，歷年來，持續吸引具「遠見」的企業共襄盛舉，躋身「遠見ESG先行者」行列。</p>

        <p class="mb-20px">本屆<strong>設有「綜合績效」與「傑出方案」兩大類評比</strong>。「綜合績效」依據產業屬性區分，設本土企業五組、外商一組。「傑出方案」依據專案主題分為七組。共有123企業、228參賽件數角逐桂冠，自2021年12月報名開跑，歷經書審和面審，由38位專家領袖組成評審團，選出46項獎座，獲獎率僅20.2％。</p>

        <p class="mb-20px">綜合績效18家獲獎企業中，有11家與去年不同，蟬聯比例不到四成。由於綜合績效的許多成效需要長期累積，很難短期衝出好成績，今年顯然打破傳統，<strong>《遠見》評審團點出，在ESG浪潮下，幾乎所有企業都動起來，「常勝軍」一旦稍有閃失，也可能被追趕上來</strong>。</p>

        <p class="mb-20px">連獲綜合績效三年首獎的企業，因有長期穩定的CSR/ESG表現，可進入年度榮譽榜。台灣大哥大長期策略清晰，靈活應變，展現企業內部高度動能；國泰金控發揮核心職能，持續綠化、擴大金融影響力，堪稱氣候金融領導者。本屆獲頒年度榮譽榜，接下來三年無須參加綜合績效評比。</p>

        <p>&nbsp;</p>

        <p class="mb-20px"><img alt="國泰金控獲年度榮譽獎" src="https://s3.csrone.com/ckfinder/images/%E5%B9%B4%E5%BA%A6%E6%A6%AE%E8%AD%BD%E6%A6%9C%20%E5%9C%8B%E6%B3%B0%E9%87%91%E6%8E%A7.JPG" style="width: 100%;" /></p>

        <p>&nbsp;</p>

        <p class="mb-20px"><img alt="台灣大哥大獲年度榮譽獎" src="https://s3.csrone.com/ckfinder/images/%E5%B9%B4%E5%BA%A6%E6%A6%AE%E8%AD%BD%E6%A6%9C%20%E5%8F%B0%E7%81%A3%E5%A4%A7%E5%93%A5%E5%A4%A7.JPG" style="width: 100%;" /><br />
        （國泰金控（上圖）、台灣大哥大（下圖）獲選年度榮譽榜）</p>

        <p>&nbsp;</p>

        <h2 class="text-30px"><strong>鴻海、中鼎創最佳紀錄 台泥三度奪冠</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">鴻海精密工業善用科技力，發展策略融合數位發展與ESG永續轉型，近年積極強化透明度、接受外界檢驗，獲世界燈塔工廠肯定。近年來也開始整合上下游供應鏈，努力邁向淨零碳排，首度抱回「電子科技業」首獎。楷模獎為技嘉科技，針對電子廢棄物提出實際解決方案，具體應對本業與環境議題；研華科技務實推動ESG相關行動，穩健經營，展現與社會共好的企業使命。</p>

        <p class="mb-20px">中鼎工程公司長期透過綠色工程，推動經濟及環境的雙贏，累積亮眼績效，也首度抱回「服務業」首獎。服務業的楷模獎則頒出三座，遠東SOGO立志成為亞洲第一的綠色百貨，眼光宏觀，執行腳步跟上國際趨勢，展現差異化特色；統一超商穩健布局各項ESG行動方案，透過永續商品強化與消費者對話，轉變令人印象深刻；富邦媒體科技加強提升顧客體驗，不忘弱勢照護，朝向一家好企業而努力，展現線上零售領導品牌的企圖心。</p>

        <p class="mb-20px">在傳統產業方面，台灣水泥積極尋求本業發展與環境的平衡點，啟動綠色革命，相關作為均展現企業高度承諾，深具引領產業向前的風範，今年第三度獲得「傳統產業」首獎。楷模獎遠東新世紀則長期投入創新，緊密結合本業，將ESG深植入核心業務，成功打造出永續營運的商業模式；楷模獎歐萊德O&lsquo;right創辦人葛望平具遠見，許多面向均領先各產業，已成國內外綠色企業代名詞，更是全球第一家美妝碳中和品牌。</p>

        <p class="mb-20px">特別的是，<strong>今年「金融保險業」的首獎從缺，理由是近來金融業屢傳重大違規與裁罰事件，而在證交所公司治理評鑑，許多公司也未能取得前5％的成績，本屆評審以高標檢視，決議首獎從缺</strong>。但三個楷模得主仍持續努力，包括元大金控制定多項ESG方針，以金融專業回應社會需求，永續經營績效成果看得到；玉山金控率先接軌國際永續制度，將ESG結合金融本業，持續深化；富邦金控領導者帶頭啟動永續願景工程，打造集團ESG藍圖，也展現高度決心。</p>

        <p class="mb-20px">「電信業」首獎中華電信，對外實現「數位包容社會」及「企業永續發展」，對內打造幸福職場，面向廣泛。楷模獎遠傳電信積極數位轉型，也投入供應鏈，組成「攜手永續先鋒隊」，擴大影響力。</p>

        <p class="mb-20px">「外商」首獎是隸屬台灣默克集團的台灣賽孚思科技，持續投資台灣在地生產，在地技術研發，以本身專長落實循環經濟，達到社會正向效益。楷模獎花王（台灣）與日常結合，從產品消費到行動倡議，讓大眾從生活面接觸ESG；另一楷模獎星展銀行（台灣）在台首創永續連結貸款、綠色存款和永續信用卡等創新產品，以資金推動永續發展，落實方向多元。</p>

        <h2 class="text-30px"><strong>人才發展組 培養員工競爭力 玉山銀、國泰投信並列首獎&nbsp;<br />
        循環永續組 展現多元發展潛力 遠東新世紀獲首獎</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">傑出方案競爭同樣激烈，今年增設兩組。一是鼓勵企業協助員工深耕專業，以提升企業競爭力，建立幸福企業為宗旨的「人才發展組」，另一是以成為綠色企業為目標，推動低碳營運、打造永續供應鏈，發展循環經濟商業模式的「循環永續組」。</p>

        <p class="mb-20px">《遠見》評審觀察，<strong>本屆「人才發展組」獲獎特色，在於針對自身產業需求困境，找出因應之道</strong>，玉山銀行和國泰投信同列首獎。玉山銀行「玉山科技聯隊 AI人才培育計畫」從文化出發，強調賦能員工，因應產業變化加強AI知能，系統化培育，制度完整，結合商業成果，看得見成效；國泰投信「創新激流時代 國泰人才複利論」針對關鍵人才、接班人才，提出具體目標，結合ESG面向，創新與未來性兼具。台灣大哥大「為員工創造高『學力』」內容創新多樣，跨部門交流，內部輪調比例高，培育員工第二專長，獲楷模獎。</p>

        <p class="mb-20px">「循環永續組」獲獎者都屬傳統產業，但代表不同領域，從廢棄物再利用、低碳造紙、到生質能議題，顯示多元發展潛力。首獎為遠東新世紀「陸、海、空廢棄物回收再製 佈建全方位循環再生技術」，長期投入廢棄物應用的創新發展，持續開發海洋塑膠的回收利用，不僅做到自身循環，對產業鏈影響力也顯而易見。楷模獎正隆「從近零製紙到淨零智紙 正隆啟動永續美好雙循環」，從原料到廢紙回收再利用，整體通路與科技系統設計完整，創造生態系，可為紙類回收循環的標竿；永豐餘投控「永豐餘全循環 以生質能貢獻碳中和」發展醣經濟與無煤汽電共生，布局生質能具有成效，建立生質能的循環永續規則，獨具遠見。</p>

        <p class="mb-20px">此外，本組也特別選出兩座中小企業特別獎，鼓勵企業不分規模大小，共同實踐循環經濟。大愛感恩科技「大愛永續創新實踐」與多種產業結合，擴散至全球，已為長期落實方案；日正食品工業「希望*新生&mdash;當水再生遇上蚓魚菜，共創綠色經濟生態」，顯示中小企業因應旱災，也能做出改變，具創新創業性，可向外推廣，是食品業循環解決方案代表。</p>

        <h2 class="text-30px"><strong>環境友善組 回歸愛護地球 台泥復育生態受肯定<br />
        中華電信以資通訊關懷長者 獲樂齡友善組首獎</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">「環境友善組」在議題面向上，回歸對地球自然環境、實踐保育與維護生物多樣性的本色。首獎是台灣水泥「太白山原住民回來了！台泥蘇澳生態系復育計畫」，從破壞到復育，成果具體，投注心力在經濟開發與環境生態之間取得權衡。</p>

        <p class="mb-20px">楷模獎是六福開發「台日犀牛交流」，投入瀕臨絕種動物的育種行動，促成國際交流，有助於台灣生態保育形象；國泰金控「綠化資金流，加速產業零碳轉型」結合核心價值，以綠化資金流帶動，影響範圍廣。大武山牧場科技「禽畜糞友善土地種養循環機制」，突破框架，提出系統性解方，值得推廣，獲選為中小企業特別獎。</p>

        <p class="mb-20px">2020第16屆《遠見》CSR獎便開始設置「樂齡友善組」，然而，近三屆以來，始終屬於「冷門」組別，引起《遠見》評審團重視，並視為警訊，呼籲高齡議題需要企業更多關注。</p>

        <p class="mb-20px">「樂齡友善組」首獎是中華電信「樂齡守護、屏安是福 中華電信用資通訊服務守護長者」，結合日常生活與文化信仰，加上本身科技能力，照顧社區長者，具推廣與深化潛力。楷模獎是南山人壽「南得有你相伴 憶起守護失智家庭」，關注失智族群需求，意義重大，攜手產官研、失智友善據點等合作網絡，令人期待持續與深度投入；統一超商「樂齡友善職場&mdash;高年級實力生」是提升中高齡就業力的具體方案，值得推廣，後續成長空間可期。</p>

        <p class="mb-20px"><img alt="中華電信獲樂齡友善組首獎" src="https://s3.csrone.com/ckfinder/images/%E4%B8%AD%E8%8F%AF%E9%9B%BB%E4%BF%A1.JPG" style="width: 100%;" /><br />
        （中華電信獲樂齡友善組首獎）</p>

        <h2 class="text-30px"><strong>中油、中信銀關懷弱勢 獲教育、公益組首獎全家帶頭解決剩食問題 奪社會創新組首獎</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">「教育推廣組」「公益推動組」依然是企業角逐的熱門領域，議題與關注角度多元，分別選出一首獎與三楷模獎。</p>

        <p class="mb-20px">「教育推廣組」首獎是台灣中油「慢工出細活 中油守護慢飛天使展翅」，專注投入在營造慢飛天使的友善職場，對受助者意義重大。楷模獎是台灣國際商業機器「儲備未來職場即戰力 打造領航21世紀新領人才」，引入全球計畫在台落地，讓人才接軌國際；太古可口可樂「《我有我的霸免權》反霸凌計畫」，關注議題難度高，有賴長期深化，發揮實質影響力；信義房屋「全民倫理長計畫」由企業倫理根本出發，立意深遠，投入長期工程，以教育行動支持更多企業穩健發展。</p>

        <p class="mb-20px">「公益推動組」首獎是中國信託商業銀行「愛接棒．少棒暨青少棒資助計畫」，鼓勵偏鄉孩童兼顧學業與運動，翻轉教育既創新又有成效，能具體評估且持續改進。楷模獎全聯實業「惜食計畫」創造企業與社會雙贏，兼顧環境與社會弱勢照顧雙重意義；遠東巨城購物中心「社區健康 Big 加值&mdash;打造全齡共好健康促進平台」發揮通路優勢，扮演全民健康促進平台，發揮社會影響力；統一超商「7-ELEVEN加減新生活計畫 公益轉型帶動社會環境共好」，以綠色生活與銀髮族群新生活為核心，為零錢捐增添創意。</p>

        <p class="mb-20px">「社會創新組」首獎是全家便利商店「看手機地圖買即期鮮食 全家用科技翻轉產業剩食困境」，引領消費者用行動翻轉剩食，更激發同業推動相關機制，成效具體，具長期發展潛力。楷模獎是裕隆經管「幸福輪轉手：南迴公益交通專案」，善用核心職能，為偏鄉醫療、教育和經濟問題提出創新解方，評審期待看到集團持續投入資源，走進有需求的偏鄉；勤美「運用物聯網 留住水資源」呼應氣候議題，鑽研專業技術，共享經驗，已提出方案後續落實規畫。</p>

        <p class="mb-20px">還有兩座中小企業特別獎得主：小驢行「小驢行．接送情：以移動服務社會」，營運模式持續更新，創造出有溫度的影響力，在社會創新領域已具指標性；馳綠國際「Lab-22 拾驗室 三倍友善回收 拾荒者培力計畫」，深入值得關懷的弱勢角落，是具溫度的社會關懷實踐方案。</p>

        <p class="mb-20px">將公司經營策略融合ESG的思惟，已是舉世企業該具備的行動。《遠見》CSR暨ESG獎持續扮演催化劑，鼓動企業讓ESG精神植入核心，發揮「ESG Inside」精神，成就永續競爭力。</p>

        <p class="mb-20px">更多得獎名單請見「<a class="color-blue" href="https://csr.gvm.com.tw/2022/" target="_blank">遠見2022CSR暨ESG企業社會責任獎</a>」官方網頁</p>`
    },
    {
      id:4,
      time:"2021/11/24",
      title:"小驢行與產官學研一同持續倡議，成功推動偏鄉客貨共乘共載修法",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<a class="color-blue" data-desc="點圖放大" href="https://img.ltn.com.tw/Upload/news/600/2021/11/24/3747510_1_1.jpg" title="屏東縣滿州鄉去年底推幸福巴士2.0，屏東縣政府輔導一粒麥子基金會投入偏鄉運輸服務，今天更進一步放寬可載送貨物。（資料照）"><img alt="屏東縣滿州鄉去年底推幸福巴士2.0，屏東縣政府輔導一粒麥子基金會投入偏鄉運輸服務，今天更進一步放寬可載送貨物。（資料照）" data-src="https://img.ltn.com.tw/Upload/news/600/2021/11/24/3747510_1_1.jpg" src="https://img.ltn.com.tw/Upload/news/600/2021/11/24/3747510_1_1.jpg" style="width: 100%;" title="屏東縣滿州鄉去年底推幸福巴士2.0，屏東縣政府輔導一粒麥子基金會投入偏鄉運輸服務，今天更進一步放寬可載送貨物。（資料照）" /></a>
        <p class="mb-20px">屏東縣滿州鄉去年底推幸福巴士2.0，屏東縣政府輔導一粒麥子基金會投入偏鄉運輸服務，今天更進一步放寬可載送貨物。（資料照）</p>
        2021/11/24 22:01

        <p class="mb-20px">〔記者陳心瑜／台北報導〕便利偏鄉民眾貨物及民生用品載運，交通部今天（24日）修正發布「汽車運輸業管理規則」（運管規則）第44條之5，讓適用運管規則44條之2規定的市區汽車客運業者偏遠路線，如滿州鄉新創幸福巴士2.0，以及仍在規劃中的台中市梨山地區新路線等，將可利用其既有行駛班次提供貨運服務。繼開放民間白牌車可合法經營偏鄉客運後，更進一步修法鬆綁客運業不得載貨規定，讓偏鄉客運合法載貨。</p>

        <p class="mb-20px">交通部表示，除了回應民眾需求外，開放偏鄉客運「客貨兼營」，也期望促使偏鄉地區既有白牌車或個體戶於兼具客貨雙重商機下，增加其轉型投入的意願。</p>

        <p class="mb-20px">交通部去年11月已修正發布運管規則，增訂第44條之2規定，縣市政府得視實際需要規劃特殊服務方式、收費基準及應遵守事項，經公告無業者有意願時，得輔導當地社會團體或個人成立市區汽車客運業經營，如屏東縣滿州鄉去年底推幸福巴士2.0，屏東縣政府輔導一粒麥子基金會投入偏鄉運輸服務。</p>

        <p class="mb-20px">交通部指出，因當前偏遠地區之公共運輸資源匱乏，既有汽車客、貨運輸業者經營意願低，為強化偏遠地區之公共運輸服務並善用民間資源，經研議在第44條之2已鬆綁開放之基礎上，再予放寬該等經營偏遠路線者如滿州鄉新創幸福巴士得以其行駛班車提供貨運服務，因此增訂44條之5規定。</p>

        <p class="mb-20px">交通部指出，此法規發布後，地方主管機關於評估地方實際需要，可先以擬開放以行駛班車提供貨運服務，先行徵詢當地居民、業者及其他政府機關意見，共同促成。</p>`
    },
    {
      id:5,
      time:"2021/08/14",
      title:"小驢行與各車隊及公私部門合作，讓確診者安心隔離、安心返家",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<main>
        <article>&nbsp;</article>
        </main>
        <img alt="「新北抗疫微光專案」的防疫車隊，隨時接受調度任務，踏實地做好自己和車內環境的防護，把病毒隔絕在車內，保護車外的社會安全。" data-src="https://storage.googleapis.com/opinion-cms-cwg-tw/article/202108/article-61161a145295d.jpg" data-srcset="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=640 640w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=900 900w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=1300 1300w" src="https://storage.googleapis.com/opinion-cms-cwg-tw/article/202108/article-61161a145295d.jpg" srcset="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=640 640w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=900 900w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Farticle%2F202108%2Farticle-61161a145295d.jpg/?w=1300 1300w" style="width: 100%;" />「新北抗疫微光專案」的防疫車隊，隨時接受調度任務，踏實地做好自己和車內環境的防護，把病毒隔絕在車內，保護車外的社會安全。&nbsp;圖片來源：臺灣計程車學院協會臉書
        <section><br />
        夜晚近12點，編號桃17的防疫計程車司機從快篩站載上一名COVID-19確診長者，送到家門口。然而，老先生沒帶鑰匙，家人因為害怕被傳染，不接電話也不開門。老先生說想去住防疫旅館，但臨時也訂不到房間。由於擔心造成防疫破口，司機不敢將他放下車，他們只能待在小小的車內空間將近3個小時，最後在侯勝宗教授的協助下，終於找到一間防疫旅館，暫時讓老先生安頓下來。</section>

        <p class="mb-20px">侯勝宗是逢甲大學公共事務與社會創新研究所特聘教授，兼任服務創新與行動設計中心主任，也是社團法人臺灣計程車學院協會理事長。2021年5月19日，COVID-19疫情在國內如震撼彈爆開，新北市是災區的重中之重，兩天後他接受新北市衛生局臨危受命，快速徵召了70輛車、80多位司機，組成防疫護送車隊，名為「新北抗疫微光專案」，擔負起確診者的後送任務。</p>

        <p class="mb-20px">回顧過去疫情最嚴峻的60多天，截至2021年7月21日前的統計，這群司機們一共載運了4,214位確診者，占了新北市所有確診者的2/3，桃17的故事只是其中之一。侯勝宗內心充滿感謝，因為這是一場看不見病毒的戰爭，這群司機沒有聲音，只有身影&hellip;&hellip;</p>

        <p class="mb-20px">但是，為何新北市衛生局會找一位大學教授來做這件事？</p>

        <p>&nbsp;</p>
        
        <img alt="" data-src="https://storage.googleapis.com/opinion-cms-cwg-tw/ckeditor/202108/ckeditor-611614a9b7dce.jpg" data-srcset="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Fckeditor%2F202108%2Fckeditor-611614a9b7dce.jpg/?w=640 640w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Fckeditor%2F202108%2Fckeditor-611614a9b7dce.jpg/?w=900 900w" src="https://storage.googleapis.com/opinion-cms-cwg-tw/ckeditor/202108/ckeditor-611614a9b7dce.jpg" srcset="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Fckeditor%2F202108%2Fckeditor-611614a9b7dce.jpg/?w=640 640w, https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fopinion-cms-cwg-tw%2Fckeditor%2F202108%2Fckeditor-611614a9b7dce.jpg/?w=900 900w" style="width: 100%;" />逢甲大學公共事務與社會創新研究所特聘教授侯勝宗，是這次後送確診者專案中的重要人物。圖片來源：大愛電視提供
        
        <p>&nbsp;</p>
        
        <h2 class="text-30px">從長照到防疫車隊的快速轉型</h2>

        <p>&nbsp;</p>

        <p class="mb-20px">20年前，35歲的侯勝宗因為創業失敗，家庭婚姻也出現問題，人生面臨幽暗的低谷。他在一個偶然的機會下成為基督徒，因為信仰的力量重新振作起來。2003年重返學校攻讀博士，並選擇有10萬樣本的計程車產業，進行公共事務與社會創新的博士論文研究。</p>

        <p class="mb-20px">2010年在逢甲大學啟動了服務創新與行動設計中心，開始發展如何應用科技協助台灣的計程車產業，包括後來的Uber轉型。又在2014年與一群計程車司機共同組成臺灣計程車學院協會，並擔任理事長。這是全世界第一個計程車大學，目的是希望把司機打造成可以做包車導遊、長照接送、弱勢扶持、物流運輸的多元司機。協會在2018年接受科技部支持，創立了「小驢行」社會企業，開始研發長照平台，媒合有需要接送服務的長照者與車隊。目前全台有5個地方政府使用，新北市衛生局是第一個合作單位，共有近500～600輛車接受調度。</p>

        <p class="mb-20px">因此當疫情爆發，一下子突增這麼多確診者，新北市衛生局第一個想到的就是調度長照平台計程車。當時因為防疫，長者不能回醫院看病，所有長照交通需求瞬間萎縮，而另一個需要出現，就是確診者接送。新北市衛生局在2021年5月21日致電侯勝宗，他立刻在通訊軟體群組上徵召到一批志願者。除了長照交通隊，還有過去一年多來，一直都在桃園機場擔任機場防疫車隊的司機們，也一起加入這個名為「新北抗疫微光專案」的防疫車隊，隨時接受調度任務。</p>

        <p>&nbsp;</p>

        <h2 class="text-30px">無限延續溫情的社會運動</h2>

        <p>&nbsp;</p>

        <p class="mb-20px">這段期間，侯勝宗同時感受到來自社會各界的力量，包含資金、車子、各種防疫用品及補給品挹注，以及三重碧華國中校長開放廢棄的舊校區，做為70輛車每天早晚要清潔消毒的清消站。大家只有一個共同信念，就是不讓病毒有流竄的破口。這當中最勇敢的就是司機，他們沒有受過任何訓練，踏實地做好自己和車內環境的防護，把病毒隔絕在車內，保護車外的社會安全。</p>

        <p class="mb-20px">侯勝宗教授娓娓道來疫情最嚴峻的60天裡，感人的小人物家庭故事每天都在發生。阿川是臺灣計程車學院協會的成員，2021年5月父親去世，當他知道協會要徵召防疫司機，便毅然決然加入，因為父親在住院期間受到許多人照顧，他覺得這是回報的機會。且為了家人安全，他借住宜蘭親戚家的空房子，每天往返三重和宜蘭，至今都還沒有回過家。</p>

        <p class="mb-20px">此外，疫情也把人與人之間的關係意外地拉近了。恒毅和文馨是一對夫妻，他們都是臺灣計程車學院協會同仁，先生是長照司機，太太是會計。平日先生回到家總是窩在沙發看電視，當他去擔任防疫司機，成了太太及孩子心目中的英雄，只是家人在感到榮耀的同時，卻也難免十分憂心。這讓侯勝宗警覺到，必須同時保護司機的家人，於是他們募集到支援，在碧華國中清消站搭建一間宿舍，可提供10位司機的住宿需求，解決了司機及其家人的擔心與不安。</p>

        <p class="mb-20px">因為這群微光英雄的默默付出，讓新北市守住疫情。疫後台灣將面臨更大挑戰，包括少子化、偏鄉高齡化等現狀，未來移動弱勢的需求只會更多。這次微光專案給了他們練兵的機會，期待未來台灣解封，人民繼續正常生活之後，他們要媒合134家企業，認養134個故鄉或偏鄉，並用134輛車去支撐134個部落或家庭的需求。</p>

        <p class="mb-20px">疫情時代最可怕的不是病毒，而是一個沒有溫度的社會。計程車司機的工作非常辛苦，如果我們每個人在搭車時，都能不吝惜給予一個微笑或是一句感謝，就是支持他們的最大力量。同時，侯勝宗也邀請我們大家，和這群司機一起做世上的光，用行動來點亮需要的人。</p>`
    },
  ])
    
  //專欄
  const infoList = ref([
    {
      id:2,
      time:"2023-09-12",
      viewCount:3973,
      author:"",
      authorImg:"",
      authorSummary:"",
      title:"【即食專送1】把城市多餘的食物送到有需要的偏鄉",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<h1 data-v-d59e4af8="">【即食專送1】把城市多餘的食物送到有需要的偏鄉</h1>

        <article data-v-d59e4af8="" id="post">
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">早晨六點多，葉小姐騎著電動車，從高雄市區來到高雄與屏東交界、高屏溪旁一個不起眼的鐵皮倉庫，裡面停著一輛企業捐贈的三噸半低溫物流車。這裡是1919食物銀行的高雄倉儲，物流士葉小姐坐上駕駛座，早上七點就要從大寮倉庫出發，遠至嘉義、台南、高雄、屏東等地的合作賣場，載運每日的即期「惜食」。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">食品載回倉庫已經是上午10點多，1919食物銀行高雄倉儲的工作人員打開車廂，把一箱一箱的食品運下車，搬進7度的冷藏室內，立即開始著手理貨。食物銀行每天收到的惜食五花八門，今天有豬腳、米漢寶跟肉粽、麵條、生鮮蔬果。工作人員在理貨過程要將食材分類，並確認食物有沒有破損腐壞。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">目前1919食物銀行在台北、台中、高雄有三處生鮮處理中心，收到惜食後，可延長生命週期的非生鮮食品，會送到中央廚房，處理後再分送到實體食物銀行或受助家庭；生鮮類食品則必須立即打包成「惜食箱」，就近提供給各地的陪讀班、原住民文化健康站等304處合作的供餐據點使用。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">高雄倉儲佔地約450坪，有兩座大型的冷凍庫可以貯存生鮮食品，是1919食物銀行在南部的重要據點，服務嘉義、台南、高雄、屏東、台東、澎湖等地的有需要的家庭，把城市裡賣不出去的剩食，即時地送到需要的地方。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="一包即將過期報廢的冷凍豬腳，需要經過多人的接力運送，才能安全即時的送到偏鄉的弱勢居民手上。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/15f96f32-4e1b-4e6f-a475-6b36e18e7cd5.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/15f96f32-4e1b-4e6f-a475-6b36e18e7cd5.jpg" style="width: 100%;" /><br />
        一包即將過期報廢的冷凍豬腳，需要經過多人的接力運送，才能安全即時的送到偏鄉的弱勢居民手上。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">完成理貨後，1919高雄倉儲要聯繫南部各個據點，確認有哪些食品要配送到哪裡。「不能一次送太多，要據點能夠處理，要看需求去分配惜食。」高雄倉儲社工組陳組長說，目前都是透過電話或訊息確認，還要填報紙本的配送單，詳細紀錄每日貨品進出的品項、讓各單位簽收，需要花不少時間做行政溝通作業。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">所幸這些聯繫的行政作業今年開始可以簡化，逢甲大學特聘教授侯勝宗協助1919食物銀行建置了數位平台app，用手機就能登記食物的品項、數量、運送地點，還能追蹤車輛位置、預計到達時間，同時結合拍照與數位簽名功能，省下許多行政作業時間，受助的民眾也能獲得更新鮮的食物。</p>
        <br />
        <br />
        <img alt="1919食物銀行的高雄倉儲有冷凍及冷藏設備，是惜食轉運到偏鄉的重要據點。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/9600b253-14b3-4d68-948b-d1c562a4e0e1.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/9600b253-14b3-4d68-948b-d1c562a4e0e1.jpg" style="width: 100%;" /><br />
        <br />
        <br />
        <br />
        <img alt="逢甲大學特聘教授侯勝宗今年協助1919食物銀行開發物流APP可大幅減少行政作業" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/0f54b37c-ced2-4676-b969-b5a01fec267b.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/0f54b37c-ced2-4676-b969-b5a01fec267b.jpg" style="width: 100%;" />
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">1919食物銀行是由基督教救助協會於2011年成立，起先是提供「食物箱」給經濟弱勢的家庭，12年來累積服務超過6.6萬戶家庭，捐贈的物資總額超過7.5億元。目前全國共有853個服務中心，遠至離島與偏鄉，讓全國各地需要幫助的家庭能夠及時獲得一餐溫飽。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">2019年，1919食物銀行關注到食物浪費問題，開始與賣場業者合作推動「惜食計畫」，希望搭建起商業賣場到弱勢家庭之間的橋梁，延長食物生命週期，減少食物浪費、也能幫助弱勢民眾，同時對於降低碳排、減少廢棄物都有所助益。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">計畫聽起來很理想，但實際要做可不容易。</p>
        <img alt="1919食物銀行總監張謙方說，運送惜食與一般食物不同，必須與時間賽跑，將食品安全的送到需要地方。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/473c73d4-0eda-4534-b246-2e75febcf304.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/473c73d4-0eda-4534-b246-2e75febcf304.jpg" style="width: 100%;" /><br />
        1919食物銀行總監張謙方說，運送惜食與一般食物不同，必須與時間賽跑，將食品安全的送到需要地方。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">「食品最擔心的就是變質，因此運送必須把握時間。」1919食物銀行總監張謙方説，目前合作的賣場大多是在食品到期前二到五天將即期食品交給1919，因此收到食物後，必須在用最短的時間把食品分送到需要的人手上，避免食物過期或變質；因此食物的冷凍倉儲和低溫運送花了不少成本。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">由於賣場每天都會有惜食，運送惜食必須與時間賽跑，一天都不能耽擱，一年365天都要派車不間斷地去收取、分類、保存、運送。1919食物銀行統計，惜食計畫所投入的人力、車輛、調度等運送成本，一年花費超過千萬元。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">張謙方説，前幾年因為1919食物銀行的低溫物流車不足，偏鄉據點的惜食需仰賴低溫宅配寄送，偶爾發生運送過程保存情況不佳、運送時間太長而腐敗的狀況，屢屢受挫。直到後來企業捐贈冷凍車後，1919才能夠自行把惜食送往偏鄉，確保食物的品質。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">將分選好的惜食箱搬上車，1919食物銀行的低溫物流車從高雄大寮倉儲出發，沿著屏鵝公路經過林邊、枋寮、枋山再駛上南迴公路，並在獅子鄉的草埔隧道前「面交」。</p>
        <img alt="惜食物資搬上冷凍物流車後，要開往南迴公路「面交」，並沿途分送物資。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/17a0fb63-3763-46f9-8ad3-2f4a0d8fd8cb.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/17a0fb63-3763-46f9-8ad3-2f4a0d8fd8cb.jpg" style="width: 100%;" /><br />
        惜食物資搬上冷凍物流車後，要開往南迴公路「面交」，並沿途分送物資。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">此時，臺東縣南迴健康促進關懷協會（南迴協會）的車輛已在南迴公路上等待，南迴協會在大武鄉、達仁鄉的偏鄉部落，設有2個關懷據點、3個文健站及5個「方舟教室」，共服務100多位偏鄉部落的長輩與小孩。南迴協會的林大姐說，從1919食物銀行取得剩食後，待會就會分送到各個部落的據點，可以作為這幾天供餐的食材。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">偏鄉交通不便，物資運輸成本過高、運送時間過長一直是很大的問題。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">裕融企業2019年以幸福輪轉手公益計畫，協助南迴協會改善部落交通服務，同時媒合1919食物銀行促成三方合作，裕融企業提供車輛、1919供應物資、南迴協會協助運輸，解決運輸的通點，讓惜食得以即時送進偏鄉。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="南迴公路沿線的偏鄉部落交通不便，裕融企業透過幸福輪轉手公益計畫幫助南迴協會服務到更多偏鄉部落的居民。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/98e9760e-02d1-41cc-b80e-d9821178aee2.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/98e9760e-02d1-41cc-b80e-d9821178aee2.jpg" style="width: 100%;" /><br />
        1919食物銀行將惜食物資交給南迴協會，由協會轉送到偏鄉部落的服務據點。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="南迴公路沿線的偏鄉部落交通不便，裕融企業透過幸福輪轉手公益計畫幫助南迴協會服務到更多偏鄉部落的居民。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/f211989f-abde-48f3-8313-50bbc18b8fb5.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/f211989f-abde-48f3-8313-50bbc18b8fb5.jpg" style="width: 100%;" /><br />
        南迴公路沿線的偏鄉部落交通不便，裕融企業透過幸福輪轉手公益計畫幫助南迴協會服務到更多偏鄉部落的居民。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <h3 data-v-ab937a18="" data-v-d59e4af8="">惜食接力賽，24小時穿越321公里、繞過半個台灣</h3>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">在南迴協會交貨的同時，另一部分的食物則由1919食物銀行台東倉庫的低溫物流車來接手「轉運」，三方都以食物銀行app確認食物的品項與數量後拍照簽收。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">張謙方說明，高雄到台東距離遙遠，如果同一輛車從高雄送到台東再開回來，空車時間長、物流司機的工作時間也會超時。為了有效運用車輛，會在南迴途中換車，這樣一來高雄倉庫的車可以再回去高雄運送其他物資，而台東的車輛要從南迴到台東市這段路中也能沿途分配物資，增加車輛利用效率。</p>
        <img alt="惜食物資送到南迴公路中繼站進行換車，由台東倉儲的低溫物流車接手運送惜食。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/7de785bf-21a1-4566-9383-dca7367eba76.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/7de785bf-21a1-4566-9383-dca7367eba76.jpg" style="width: 100%;" /><br />
        惜食物資送到南迴公路中繼站進行換車，由台東倉儲的低溫物流車接手運送惜食。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">出了南迴公路，右手邊車窗外遼闊的大海變得更加蔚藍，太平洋的浪每日不停地往返，是物流士在島嶼東側的日常風景。1919食物銀行台東倉庫主任陳逸群，開著低溫物流車行經大武、多良、金崙、太麻里，經過幾處塞車路段，終於抵達1919台東倉庫時，天色已全黑，車上大約還剩下1/3的物資。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">麵條10箱、豬腳3箱、肉粽4箱⋯⋯陳主任一個人包辦清點、載運、搬貨、理貨等工作。由於台東倉庫沒有冷凍庫，目前只有一座單門的營業用冰箱，他得把冰箱裡的水與隔板取出，才能放得下需要冷凍的豬腳與肉粽等物資。</p>
        <img alt="1919食物銀行台東倉儲主任說，台東的地形狹長，出車跑一趟偏鄉聚落要花費很長的時間。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/ef952888-044f-4a28-9cae-470e3e4a44ad.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/ef952888-044f-4a28-9cae-470e3e4a44ad.jpg" style="width: 100%;" /><br />
        1919食物銀行台東倉儲主任說，台東的地形狹長，出車跑一趟偏鄉聚落要花費很長的時間。攝影／蔡宗儒
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">陳逸群說，台東的地形狹長，海岸線從南到北橫跨244公里，出車跑一趟偏鄉聚落要花費很長的時間；再加上車輛與人力都很有限，目前主要都是由據點派車來台東倉庫取貨。他說，未來希望能與「微光行動協會」合作，透過復康巴士或長照車輛協助運送物資，才能服務更多偏鄉有需要的民眾。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">微光行動協會是侯勝宗老師在疫情期間成立，最初提供防疫專車服務，在疫情過後持續經營偏鄉的長照車隊。理事長侯勝宗說，交通是偏鄉最主要的問題，公共運輸不足，民營計程車也多不願意跑那麼遠；若能鬆綁長照專車規定，以人貨共乘的方式活用車輛，就能提高運輸量能與彈性，同時減少空車路程造成的碳排放，又能改善司機收入，提高司機投入偏鄉運輸服務的意願。</p>

        <p class="mb-20px" data-v-2a43c18a="">台東縣長濱鄉南溪部落山路蜿蜒，距離市區要兩小時車程。攝影／孫文臨</p>
        <br />
        <img alt="長照車輛要前往偏鄉載運長者時，可以協助運送物資，有效利用偏鄉有限的交通資源。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/af741644-bbc4-4ece-b3d8-3ca702a40b41.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/af741644-bbc4-4ece-b3d8-3ca702a40b41.jpg" style="width: 100%;" /><br />
        <img alt="由於偏鄉交通不便，長照車輛若能載運物資才能發揮最大效益。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/d147ed40-f9f6-4305-bba0-28e25c82bfee.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/d147ed40-f9f6-4305-bba0-28e25c82bfee.jpg" style="width: 100%;" /><br />
        <img alt="長照車輛需可攜式小冰箱低溫保存生鮮惜食。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/aa03a089-fa0d-4ca4-be22-009826f0a510.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/aa03a089-fa0d-4ca4-be22-009826f0a510.jpg" style="width: 100%;" /><br />
        <img alt="微光行動協會的司機黃先生說，由於長照車輛的費用是每趟計價，不是里程計價，所以對司機而言接送偏鄉的居民相當不划算。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/e28c2056-c356-40e3-a33c-2b088d551fbd.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/e28c2056-c356-40e3-a33c-2b088d551fbd.jpg" style="width: 100%;" /><br />
        <img alt="台東縣長濱鄉南溪部落山路蜿蜒，距離市區要兩小時車程。攝影／孫文臨" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/bf9652ee-0a4d-44af-b396-d4860a1420a5.jpg" data-v-2a43c18a="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/bf9652ee-0a4d-44af-b396-d4860a1420a5.jpg" style="width: 100%;" />
        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">隔天早上七點多，微光協會的司機開著長照車輛，到1919食物銀行台東倉庫將物資搬運上車，需要冷藏的食物跟保冷袋一同裝進冰桶，由於最遠要到台東縣最北邊的長濱鄉南山部落，沒塞車也需車程2小時，避免食物退冰必需把握運送時間。</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">從台東市出發開過筆直的海岸線，過了長濱市區再轉往海岸山脈上行駛，產業道路迂迴曲折，抵達台東最北的山區部落南溪部落時已過上午十點。南溪文健站的工作人員正好在準備午餐，見到冰箱裡的豬腳和肉粽，笑說：「今天可以加菜了。」</p>

        <p class="mb-20px" data-v-ab937a18="" data-v-d59e4af8="">這包即期的冷凍豬腳，從前一天被賣場交給1919食物銀行，先被送往高雄大樑倉儲，接著在南迴中途轉運換車，再到台東倉庫，最後才抵達偏遠的長濱南溪部落。1919食物銀行、微光協會好幾位工作人員同心協力，才能趕在24小時內、跨越300多公里，讓原本可能被報廢的剩食，成了偏鄉老人共餐的惜食，把物資送到需要的地方。</p>
        <img alt="經由1919食物銀行、微光行動協會、南迴協會、裕融企業的同心協力，才能順利將惜食送到偏鄉。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/2e69ca05-b015-4a20-a322-c5b41b86be58.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/2e69ca05-b015-4a20-a322-c5b41b86be58.jpg" style="width: 100%;" /><br />
        1919食物銀行、微光行動協會、南迴協會、裕融企業等人的同心協力，才能在24小時內跨越300多公里，順利將惜食物資送到偏鄉居民的餐桌上。攝影／蔡宗儒</article>`
    },
    {
      id:3,
      time:"2023-09-12",
      viewCount:2052,
      author:"",
      authorImg:"",
      authorSummary:"",
      title:"【即食專送2】偏鄉中的偏鄉、資源遙不可及的南溪部落",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<h1 data-v-d59e4af8="">【即食專送2】偏鄉中的偏鄉、資源遙不可及的南溪部落</h1>

        <article data-v-d59e4af8="" id="post">
        <p data-v-ab937a18="" data-v-d59e4af8="">走在城市的街頭，便利商店隨處可見，方圓100公尺內的超市與便利商店超過十家。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">然而，在台東長濱鄉的南溪部落，距離最近的超市在18公里之外的長濱市區，開車要花上半個小時，走路則要走三個小時；最近的國小在6公里的山下、要走一個小時的山路才會到。最近大醫院，要開車超過一小時到花蓮玉里就醫，還經常叫不到救護車。居民李大哥說，有一次部落發生火災，等了半小時消防車才上來，火都快燒完了。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="長濱鄉南溪部落距離台東市區車程兩小時以上，每週只有一班公車能下山，是偏鄉中的偏鄉。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/e925246f-c5a2-4bb3-a855-e93490de2ea0.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/e925246f-c5a2-4bb3-a855-e93490de2ea0.jpg" style="width: 100%;" /><br />
        長濱鄉南溪部落距離台東市區車程兩小時以上，每週只有一班公車能下山，是偏鄉中的偏鄉。攝影／蔡宗儒
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <h3 data-v-ab937a18="" data-v-d59e4af8="">偏鄉採買難：最近的超商3小時的路程之外、買不到日用品</h3>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">正因為交通如此偏遠，位於花蓮與台東交界的南溪部落又被稱為「偏鄉中的偏鄉」，直到2019年交通部公路局才與台東縣政府合作開通了第一班公車「幸福巴士─南溪線」，每個禮拜只有一班車：星期三上午七點半可以搭車下去長濱鄉公所，十點半就要搭回來；如果錯過了車班，那要再等七天，才有下一班回部落的公車。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">南溪部落的居民多是65歲以上的年長者，而且山路迂迴崎嶇，如果長者自己騎機車下山，也很危險，因此居民幾乎都仰賴南溪文健站提供的共餐與送餐服務。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">南溪部落是1919食物銀行在全台各地服務的諸多偏鄉之一，透過1919食物銀行各地據點的通力協助，將城市裡大賣場即將過期報廢的剩食，即時送到偏鄉的部落文健站作為共食的食材。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="南溪部落有許多年過70歲的獨居長者，每日步行到部落文健站上課、吃飯，行動不便者則仰賴村長協助送餐。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/b1f7e1b2-fcc0-4283-9561-5e8ce853cc04.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/b1f7e1b2-fcc0-4283-9561-5e8ce853cc04.jpg" style="width: 100%;" /><br />
        南溪部落有許多年過70歲的獨居長者，每日步行到部落文健站上課、吃飯，行動不便者則仰賴村長送餐。攝影／蔡宗儒
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">南溪社區發展協會總幹事嚴愉晴說，由於社區經費有限，餐食多是簡單準備，盡量不要讓大家餓肚子；食物銀行帶來的物資，對於部落很有幫助。當天的冷凍肉粽很快就發完了。採訪當天，還有一位行動不便的身障者說，希望微光行動的司機下次送餐時能幫他買成人用的紙褲，因為偏鄉買東西真的太不方便了。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">石清榮與嚴愉晴夫婦三年前回到部落作社區服務，已經當阿公阿嬤的他們，還算是部落的年輕人。南溪部落文健站以廢棄的南溪國小校舍改建，設備簡易，仍盡可能為部落長輩開課辦活動，有活力健康操、延緩失能、頭腦保健等課程，每天都有提供午餐共食，針對行動不便的獨居長者，文健站也都會幫忙送餐到他們家。</p>
        <p>&nbsp;</p>

        <img alt="南溪部落交通不便，導致工作機會缺乏、人口外移、高齡化、貧窮等問題。當地的南溪國小已廢校多年，校舍成為危樓，而蔣公銅像卻仍豎立於此。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/42078846-f7e5-4cec-987d-293ac29d0feb.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/42078846-f7e5-4cec-987d-293ac29d0feb.jpg" style="width: 100%;" /><br />
        南溪部落交通不便，導致工作機會缺乏、人口外移、高齡化、貧窮等問題。當地的南溪國小已廢校多年，建築已成危樓，只剩蔣公銅像仍豎立廢棄校舍中。攝影／蔡宗儒
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <h3 data-v-ab937a18="" data-v-d59e4af8="">偏鄉就醫難：等不到救護車、最近的大醫院在50外</h3>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">同時部落文健站也作為簡易醫護站，照服員林小姐說，夏天高溫炎熱偶而會有熱傷害、中暑的長輩會到醫護站，也會有務農受傷跌倒等外傷，但因為沒有擔架或病床，只能在地上舖墊子讓患者休息。她希望能有更完善醫療設備，讓部落居民使用。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">當地除了資源不足，文健站的人力也非常吃緊。林小姐說，之前找來的照服員都待不久就離開了，目前還找不到人。因為南溪社區地處偏遠、交通不便，山路又不好走，很難找到願意上山的照服員。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">由於人力、物力的匱乏，部落裡有一位退休多年的照服員董小姐，仍持續收到服務個案的求助，「因為她（個案）家沒有女生」，所以她平時要幫忙洗澡、換尿布、買生活用品，非常辛苦。她希望有更多年輕人能回來部落服務。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="由於南溪部落交通偏遠外地資源難以抵達，當地居民只能老弱互助，一位已經退休多年的照服員仍必須持續協助弱勢個案日常起居，非常辛苦。攝影／孫文臨" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/78233173-6322-47f1-b0ac-41f9a74bd5df.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/78233173-6322-47f1-b0ac-41f9a74bd5df.jpg" style="width: 100%;" /><br />
        由於南溪部落交通偏遠外地資源難以抵達，當地居民只能老弱互助，一位已經退休多年的照服員仍必須持續協助弱勢個案日常起居，非常辛苦。攝影／孫文臨
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">南溪部落一位70歲的李大哥說，他的小孩都搬到城市了．只有過節才會回來，「我年輕也住過台北，也有去高雄跟孩子一起住過，都住不習慣，那個公寓大樓裡面大家都不認識，這裡的房子沒人住也會荒廢掉。」因此即使交通不便，他還是想回到部落生活。他說，小時候就在這裡出生，以前沒有柏油路、沒有車，也是走下山。「也不知道祖先幹嘛搬到這麼偏僻的地方住，但這裡就是我們的部落、我們的根。」</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <h3 data-v-ab937a18="" data-v-d59e4af8="">侯勝宗整合偏鄉交通資源，盼串連「食醫助行」、帶動地方創生</h3>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">微光行動協會的司機開著長照車輛，從台東市食物銀行載運惜食物資，到南溪社區文健站、南山教會送貨後，便又開著長照車輛下山，要趕去成功鎮接一位預約長照車輛的長者到台東市區的醫院洗腎。這正是微光行動協會創辦人、台東逢甲大學特聘教授侯勝宗多年來持續推動的，「食醫助行」的偏鄉交通模式。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="逢甲大學特聘教授侯勝宗提出「食醫助行」偏鄉交通計畫，希望整合有限的交通資源與車輛，發揮最大效益，帶動地方創生。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/a1d8607f-8dbe-4da7-bdc9-6dd33538e8a6.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/a1d8607f-8dbe-4da7-bdc9-6dd33538e8a6.jpg" style="width: 100%;" /><br />
        逢甲大學特聘教授侯勝宗提出「食醫助行」偏鄉交通計畫，希望整合有限的交通資源與車輛，發揮最大效益，帶動地方創生。攝影／蔡宗儒
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">侯勝宗說，台灣有許多的偏鄉部落都苦於交通問題，若不能有效整合與共享有限運能，偏鄉運輸成本勢必持續居高不下<strong>。他提出的「食醫助行」實驗計畫，希望多元有效的運用偏鄉有限運輸資源，車輛可以載居民下山就醫、就學，也能載醫療人員、照服員與物資進入偏鄉，讓一輛車可以服務更多的人，發揮最大的效益。</strong></p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">侯勝宗認為，整合交通需求後，可以創造司機多元收入，才不必長期仰賴政府補助，而且運輸也可以結合在地觀光與物流，週末能載遊客、平日載居民就學就醫與物資，創造在地就業機會，進而達到地方創生的願景。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="侯勝宗長期致力改善偏鄉交通困境，親自走進偏鄉了解當地居民的需求、搬運物資也親力親為。攝影／蔡宗儒" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/4ad0bb10-759d-403c-9fa7-cd4b4ffd9d92.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/4ad0bb10-759d-403c-9fa7-cd4b4ffd9d92.jpg" style="width: 100%;" /><br />
        侯勝宗長期致力改善偏鄉交通困境，親自走進偏鄉了解當地居民的需求、搬運物資也親力親為。攝影／蔡宗儒
        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">侯勝宗指出，目前衛福部、教育部、交通部、原民會等部會投入許多偏鄉資源，但資源分散且無法共享，導致偏鄉運輸業者難以經營、居民無車可搭的窘境。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        近年衛福部開始鬆綁長照車輛專車專用的規定，改採「向民間買服務」模式，讓車輛使用更有效率。侯勝宗也建議，交通部、教育部或原民會也應該把「供給導向」的定班定線公車，融入「需求導向」的預約接送與共乘模式，鬆綁車輛使用限制，可以人貨共乘，讓偏鄉交通資源共享與共用、發揮更大的效益。

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">舉例來說，屏東小琉球委託高雄客運營運環島公車於2016年通車，採定時定線運行，雖然每天有13班車，但路線與時間不符遊客與當地居民所需，最終搭乘的人寥寥可數，業者入不敷出，營運短短七年就停駛，「低碳島」口號落空，偏鄉交通仍未改善。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">若能改採預約制，讓運輸路線更有彈性，平日可以送孩童上學、載長者就醫、送貨，假日則以載外來遊客為主，不僅能服務更多民眾，也能增加運輸業者多元收入，避免偏鄉交通長期仰賴政府補助容易斷炊的困境。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        <img alt="台東縣長濱鄉南溪部落山路蜿蜒，距離市區要兩小時車程。攝影／孫文臨" data-src="https://storage.googleapis.com/static-vision-tw-prod/images/bf9652ee-0a4d-44af-b396-d4860a1420a5.jpg" data-v-28ecc226="" lazy="loaded" src="https://storage.googleapis.com/static-vision-tw-prod/images/bf9652ee-0a4d-44af-b396-d4860a1420a5.jpg" style="width: 100%;" /><br />
        長照車輛到偏鄉載送長者就醫的同時，也能協助載運物資，減少空車的浪費。攝影／孫文臨

        <p>&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">「沒有交通就沒有生活。」侯勝宗說，運輸是偏鄉物資、上學、就醫、採買、工作不可或缺的一環，只有把路鋪好還不夠，還得有人、有車才能串接偏鄉的最後一哩路。希望能透過此次1919食物銀行、微光行動協會、裕隆集團的合作經驗，搭建起更多偏鄉運輸的橋梁，讓台灣各地其他的極限部落也能實踐「食醫助行」的方案。</p>

        <p>&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">南溪部落坐落在山谷之中，對城市人來說，可能是與世隔絕、環境清幽的世外桃源；但對當地居民而言，交通不便是他們每天出門都要面臨的考驗。偏鄉的交通問題不只是交通的問題，也跟當地的就業、醫療、教育、長照、文化息息相關，若能將有限的交通資源整合共享、靈活運用，才能偏鄉找出活路，否則偏鄉會離我們愈來愈遠。</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>

        <p data-v-ab937a18="" data-v-d59e4af8="">&nbsp;</p>
        </article>`
    },
    {
      id:4,
      time:"2022/12/20",
      viewCount:4067,
      author:"侯勝宗",
      authorImg:"/images/newsAndInfo/author.png",
      authorSummary:"逢甲大學公共事務與社會創新研究所特聘教授，研究領域專注於科技與服務創新，共享經濟與工作意義打造，特別著重於老化社會的移動服務(Mobility as a Social Services,MaSS)研究。創辦台灣計程車學院協會與小驢行，曾協助全國超過10個縣市的長照交通規劃，推動長照交通大平台的就醫接送媒合。",
      title:"照顧服務的新未來 銀髮管家的創新服務",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<p class="mb-20px"><img alt="【侯勝宗專欄】照顧服務的新未來 銀髮管家的創新服務" itemprop="image" src="https://lyrasoft.s3.amazonaws.com/ankecare/images/article/image/51de85ddd068f0bc787691d356176df9.jpg" style="width: 100%;" /><br />
        看過蝙蝠俠（Batman）電影，一定對男主角家忠心耿耿、無所不知的管家─「阿福」不陌生。邁向超高齡社會的台灣，也需要類似「阿福」管家，我稱這一群優質的服務整合者為「銀髮管家」。只是這一群「銀髮管家」在哪裡呢？又如何得到服務呢？</p>

        <h2 class="text-30px"><strong>生活服務支援需求未被滿足&nbsp; &nbsp;催生管家服務</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">台灣目前的照顧服務大多數尚處於萌芽初期，選擇不多。從馬斯洛需求層級理論（Maslow&#39;s Hierarchy of Needs）來分析，長照2.0相關服務大多從底層<a class="color-blue" href="https://www.ankecare.com/article/2200-2022-10-02-16-51-17">醫療照顧</a>與<a href="https://www.ankecare.com/article/2206-2022-10-06-08-02-25">生活支援</a>為出發，較難兼顧到高層次的尊重與自我實現需求。</p>

        <p class="mb-20px">從人口結構角度來看，台灣目前財富累積最多的人口約落在55&sim;70歲的戰後嬰兒潮族，他們大多生活還能自理，更大的需求並不在長照機構，而是生活支援服務（含養生休閒、健康維持、無障礙居家生活環境等），而這群人也恰巧是從初老步入高齡的長照潛在族群。</p>

        <p class="mb-20px">隨著少子化與小家庭的發展，許多長者膝下的孩子可能並不在身旁，所以他們極有可能正面臨「老老照顧」、「雙老相伴」的照顧困境，或在城市內過著獨居無親生活。</p>

        <p class="mb-20px">所以，筆者預測10年內將有一個新興的<a class="color-blue" href="https://www.ankecare.com/article/2256-2022-11-11-09-58-55">自費長照服務</a>出現─「銀髮管家」。且將如同在蝙蝠俠電影中細心照顧韋恩公子的阿福一般，代替身處遠方的子女善盡孝道，照顧年邁父母；或獨居長者亦可自聘管家，協助生活打理或日常的照顧。</p>

        <p class="mb-20px">「管家（英文為 Butler）」是一個在大家庭中為其服務的僕人，此角色幾世紀以來都是作為一個家庭的總管理員。英式管家出現的早期大約是在中世紀時，只有英國和法國的王室家庭或貴族名門才有資格僱傭，即便是再有錢的普通人也不被允許聘用英式管家。所以「管家」也成為了貴族身分的象徵（維基百科）。現代社會中，雖然大多數家庭不再聘請管家，但在許多高級住宅或私人社區，仍保有「社區管家」專業經理人角色。他們大多執行著社區每一家戶的房產物業、代收信件、洗衣清潔、外出叫車、訂餐送食、家庭整理等傳統管家功能，甚至有兼具商業秘書或宴會籌備等功能。</p>

        <h2 class="text-30px"><strong>戰後嬰兒潮步入老年&nbsp; &nbsp;銀髮管家商機興起</strong></h2>

        <p>&nbsp;</p>

        <p class="mb-20px">對普遍有三高「高齡、高儲蓄、高教育水準」的戰後嬰兒潮之銀髮族來說，如何讓他們享受優質服務，將是一個充滿想像的「銀色商機」。</p>

        <p class="mb-20px">「銀髮管家」即意謂著可陪伴和協助高齡長者（或家庭）解決「食衣住行育樂」相關服務者。這樣的服務當然不太可能由衛福部長照基金來提供，而是交由自費市場來提供。</p>

        <p class="mb-20px">銀髮管家可以從事哪幾類的高齡長者服務呢？由筆者所創辦的社團法人臺灣計程車學院協會，目前正嘗試一項小型社會創新實驗─將人們傳統「食衣住行」生活需求，轉化為高齡長者的「食醫助行」4大服務。</p>

        <p class="mb-20px">為什麼要做這4大類型的管家服務呢？因為從馬斯洛需求層級來看，「飲食」和「醫療」本就是高齡長者生活的低層次必要需求；「助人」則是實現自我生命與尋找意義的高層次需求；而讓身體持續保持「行動」狀態，樂活出行、參與社會、免於孤寂，則是減緩高齡長者身體弱化與保持正向心理的重要關鍵活動。</p>

        <p class="mb-20px">另外，換個角度來看「行」，「食─醫─助」這3大需求都需要專人協助的「<a class="color-blue" href="https://www.ankecare.com/article/1567-27426">移動服務</a>」，所以用「行」為手段，來成就「食」、「醫」、「助」3大生活需求與生命目的，是這項社會實驗的基本假設。</p>

        <h1 class="text-30px"><strong>斜槓司機作先鋒&nbsp; &nbsp; 培育銀髮管家種子隊</strong></h1>

        <p>&nbsp;</p>

        <p class="mb-20px">在實務操作上，我們先從已獲協會認證的<a class="color-blue" href="https://www.ankecare.com/article/981-21806">斜槓司機</a>來嘗試培訓銀髮管家。這一群培訓中的銀髮管家，都是具有專業駕駛證照的長照駕駛員，由司機自由報名形成學習社群，聘請內部同仁或外部專家擔任講師，以在職進修方式，依照個人興趣與人格特質，培力司機考取「<a class="color-blue" href="https://www.ankecare.com/article/1568-27427">照顧服務員</a>」、「丙級照顧服務員技術士」、「領隊導遊解說員」或其他各種不同證照，培力司機擁有「食醫助行」等4方面之專業能力，希望能藉此為未來長照產業培訓一批銀髮管家種子人員。</p>
`
    },
    {
      id:5,
      time:"2022/04/25",
      viewCount:3896,
      author:"侯勝宗",
      authorImg:"/images/newsAndInfo/author.png",
      authorSummary:"逢甲大學公共事務與社會創新研究所特聘教授，研究領域專注於科技與服務創新，共享經濟與工作意義打造，特別著重於老化社會的移動服務(Mobility as a Social Services,MaSS)研究。創辦台灣計程車學院協會與小驢行，曾協助全國超過10個縣市的長照交通規劃，推動長照交通大平台的就醫接送媒合。",
      title:"今日的疫情 明日社會的新常態",
      imageSrc:"/images/newsAndInfo/default.png",
      content:`<p class="mb-20px">全球新冠肺炎確診人數己突破4.4億人口，累計死亡人數也超過了601萬人；其中Omicron變異株自去年發現以來，已造成至少50萬人染疫而亡，世界衛生組織（WHO）感嘆這樣的死亡人數已經超越悲慘。</p>

        <p class="mb-20px">大疫之下，唯一可以確定的是「不確定」！我們如何面對未來？本文筆者將帶領大家重新回到去年5月，台灣三級警戒的封城，探索疫後社會的新常態。2021年5月中下旬，台灣進入疫情三級警戒後，筆者創立的臺灣計程車學院協會接到新北市衛生局指令，啟動確診者安心返家微光車隊專案（<a class="color-blue"href="https://bethelight.org.tw/" rel="noopener" target="_blank">https://bethelight.org.tw/</a>）。在新北市衛生局的授權下，集結新北市數家長照交通特約業者，利用旗下長照專車和緊急徵召司機，天天與看不見的病毒作戰，搶救染疫的確診者可以安全被載送至醫院或集中檢疫所，或是讓解隔離者安心後送返家。</p>

        <h4 class="text-30px"><strong>抗疫車隊回歸長照行動接送服務</strong></h4>

        <p>&nbsp;</p>

        <p class="mb-20px">這一支以「<a class="color-blue" href="https://www.ankecare.com/article/1457-26091">微光車隊</a>」為名的抗疫大軍，共計完成近4,400趟次的確診者返家服務，長照司機將確診者病毒攔截自己車內，避免進入大眾交通運輸體系，替台灣守住傳播鏈最後一哩破口。隨著去年疫情發展趨緩，微光抗疫車隊於2021年8月中旬順利退場，無1人染疫，全員平安歸建，回到長照交通就醫接送服務行列。</p>

        <p class="mb-20px">在去年執行微光抗疫接送之際，我們也發現與被判定確診的同住長輩親人或接觸者，也需立即進行居家隔離，其所衍生的確診者家人居家照顧需求，以及入宅的照護服務如何執行，成為當時一大難題。幸運的是，來自台中的<a class="color-blue" href="https://www.ankecare.com/article/1397-25440">伯拉罕共生照顧勞動合作社</a>主動加入新北市抗疫行列，讓微光行動從交通接送擴大為確診家庭的「入宅照護」。</p>

        <p class="mb-20px">伯拉罕以發展「ALL IN ONE」照顧模式為其核心價值，整合居醫、居服等跨專業領域，依照個案需求發展出1天多次、重症返家的共生照顧，推動民眾可負擔的平價溫馨服務。在伯拉罕協助下，號召並整合新北市數個在地居家醫療照護團隊及亞東醫院，一同投入確診家屬入宅的照護服務，增強了微光行動的亮度。</p>

        <p class="mb-20px">在去年投入確診者接送與隔離者入宅居家照顧實戰演練後，筆者和伯拉罕團隊一直構思未來在後疫情年代，移動受限者（包含必須被隔離的確診者和因身體功能或地理不便的移動弱勢者）交通與照顧服務模式為何？疫後社會移動服務與照顧需求要如何設計與因應？新北微光行動，提供我們一個重要照顧的參考經驗。</p>

        <p class="mb-20px">因去年疫情最嚴重之際，除了載送確診者的高風險接送外，也向民間募集資源，提供居家高防護跨專業整合服務，無縫銜接居家服務，讓居家需求在第一時間被滿足，並提早發現狀況，提供最即時醫療照護及生活照顧，避免確診家庭在治療期間形同孤島。</p>

        <h4 class="text-30px"><strong>轉型社會所需整合型照顧服務</strong></h4>

        <p>&nbsp;</p>

        <p class="mb-20px">若將場景拉到台灣偏鄉地區或原鄉部落，可以更進一步深思，這波疫情帶給都會人民封城和限制外出的異常不便，其實正是偏（原）鄉人民生活的日常。缺乏交通資源的偏鄉高齡長者和在城市工作的遠方家人，天天都受困於「有門出不去、有家歸於不得」的困境。偏鄉所需的交通接送和日常居家照護，與疫情時期的確診者需求十分相似。疫後社會的家庭照顧系統，或許可以師法今日偏鄉部落的多元整合照顧服務或遠距問診與居家醫療。</p>

        <p class="mb-20px">依照後疫時代的需求，微光行動在跨領域伙伴相互配搭之下，將逐步推動成為以下4大服務：載你微光（交通接送）、照你微光（到宅照顧）、醫你微光（遠距問診）、智你微光（智慧醫療），推動疫後社會所需的整合型照顧服務。提供居家高防護的跨專業整合服務，避免確診家庭在治療期間形成孤島，無縫銜接居家服務，讓居家的需求在第一時間即可以滿足，並即早發現狀況，提供最即時的醫療照護及生活照顧，有助於台灣確診個案死亡率的降低，避免疫情社會悲劇的發生。</p>

        <p class="mb-20px">疫情終將結束，但病毒不會消失。在未來的世界中，人類必須學會「與疫共處」。在不確定的後疫情年代，希望微光能持續守護台灣。</p>

        <p class="mb-20px"><img alt="微光車隊成為防疫工作的一大助力，並在完成任務後回到長照交通就醫接送服務行列，繼續守護長輩。" src="https://lyrasoft.s3.amazonaws.com/ankecare/images/2022/04/25/a2a7e73917b87e8b66971b66.jpg" style="width: 100%;" />微光車隊成為防疫工作的一大助力，並在完成任務後回到長照交通就醫接送服務行列，繼續守護長輩。（圖片來源／侯勝宗）</p>`
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



<style scoped>
  /* h2{
    font-size: 30px !important;
  }
  p{
    margin-bottom: 10px !important;
  }
  a{
    color:blue !important;
  } */
</style>

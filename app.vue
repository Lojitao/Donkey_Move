<template>
  <div class="bg-gray-700">
    <div @click="getData()" class="cursor-pointer">點擊我</div>
    <NuxtWelcome />
    <!-- <div v-for="item in datas" :key="item.id">
      <span>{{ item.planName }}</span>
    </div> -->
  </div>
</template>


<script setup lang="ts">
  // import donateType from "~/apis";
  import apis from '~/apis';

  const { data: userInfoResult, execute } = await apis.donateType.Publicload()
  // console.log('userInfoResult',userInfoResult);

  const getData = async()=>{
    const { data: userInfoResult, execute } = await apis.donateType.Publicload()
    // console.log('userInfoResult',userInfoResult);
  }
  //nMounted(async() => {
    
  // })
  // const datas = ref([]) 
  
  // const { data, pending, error } = await useAsyncData("userInfo",() =>{
  //   return $fetch("https://giving.ntua.edu.tw/service/api/DonatePlans/publicload")
  // })
  // console.log('data',data.value);
  // const {data:resData,code} = data.value
  // console.log(code,resData);
  // // const refresh = async() => {
  // //   let userInfodata = await refreshNuxtData("userInfo")
  // //   console.log('data',data.value.data);
  // //   console.log('data',data.value.code);
  // // };
  // // console.log('data',data)
  

  // // console.log('resultData',resultData);
  // // datas.value = resultData.data



</script>

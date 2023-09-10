<script setup>
// import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

definePageMeta({
  title: 'Toggle Boxes',
});
const isShow = ref(true);
const main = ref();
let tl;
// let ctx;

function EnterFrom(el){
  gsap.set(el,{
    duration: 1, // duration of the animation in seconds
    opacity: 0 // target opacity value
  })
}

function onAfterEnter(el,done){
  gsap.to(el,{
    duration: 1, // duration of the animation in seconds
    opacity: 1 ,// target opacity value,
    onComplete:done
  })
}

function Leave(el,done){
  gsap.to(el,{
    duration: 1, // duration of the animation in seconds
    opacity: 0 ,// target opacity value
    onComplete:done
  })
}

function toggle() {
  isShow.value = !isShow.value
}

const toggleTimeline = () => {
  tl.reversed(!tl.reversed());
};

// function testScroll() {
//   gsap.to(".animated-element", {
//     opacity: 1,
//     y: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".animated-element",
//       start: "top center", // The animation will start when the top of .animated-element is 100px from the top of the viewport
//       toggleActions: "play none none reverse"
//     }
//   });
// }

// function initGSAPAnimations (){
//   gsap.context((self) => {
//     const boxes = self.selector('.box');
//     tl = gsap
//       .timeline()
//       .to(boxes[0], { x: 120, rotation: 360 })
//       .to(boxes[1], { x: -120, rotation: -360 }, '<')
//       .to(boxes[2], { y: -166 })
//       .reverse();
//   }, main.value); // <- Scope!
// }

// onMounted(() => {
//   testScroll();
//   initGSAPAnimations() 
// });

// onUnmounted(() => {
//   ctx.revert(); // <- Easy Cleanup!
// });
</script>

<template>
  <main>
    <button @click="toggle()">toggle</button>
    <transition
      @before-enter="EnterFrom"
      @after-enter="onAfterEnter"
      @leave="Leave"
    >
      <div v-if="isShow" class="bg-red-500">你好喔～～～～</div>
    </transition>
    <section class="boxes-container" ref="main">
      <h1>Use the button to toggle a Timeline</h1>
      <div>
        <button @click="toggleTimeline">Toggle Timeline</button>
      </div>
      <div>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
      </div>

    </section>
    <div class="content"></div>
    <div class="animated-element">This element will animate when in view</div>
    <div class="content"></div>
  </main>
</template>

<style>
.animated-element {
  opacity: 0;
  transform: translateY(50px);
}
.content {
  width: 100%;
  height: 150vh;
  background-color: #f0f0f0;
}
</style>

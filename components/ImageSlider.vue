<template>
  <div class="bg-white w-[520px] p-2">
    <div class="relative p-4">
      <img :src="images[curIndex]" alt="Product_image" class="w-full h-[600px] object-contain" />
      <div
        @click="() => hanldeSideClick('left')"
        class="absolute w-[60px] h-[100%] top-0 left-0 hover:cursor-pointer hover:bg-gradient-to-r from-slate-100 transition-colors flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="-rotate-90 opacity-40" />
      </div>
      <div
        @click="() => hanldeSideClick('right')"
        class="absolute w-[60px] h-[100%] top-0 right-0 hover:cursor-pointer hover:bg-gradient-to-l from-slate-100 flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="rotate-90 opacity-40" />
      </div>
    </div>
    <div class="w-full bg-white overflow-hidden py-1 px-10 relative">
      <div class="w-full flex transition-transform ease-in-out" :style="{ transform: `translateX(${translateX}px)` }">
        <div v-for="(image, index) in images" :key="image" @click="handleClickThumb(index)" :class="[index === curIndex ? 'border' : '', 'border-slate-400']">
          <div class="w-[90px] h-[90px] p-1 hover:cursor-pointer border-slate-400">
            <img :src="image" alt="" class="inline-block w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-[200px] flex overflow-auto gap-4"></div>
  </div>
</template>

<script setup>
const props = defineProps(["images"]);
// const images = props.images;
const images = [
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
];
const translateX = ref(0);
const curIndex = ref(0);
const handleClickThumb = (index) => {
  if (curIndex.value === index) {
    return;
  }
  if (curIndex.value < index && index !== 0) {
    // click on the right one
    translateX.value -= 90;
    console.log("sss", curIndex.value, index, translateX.value);
  } else if (index !== 0) {
    translateX.value += 90;
    console.log("sss", curIndex.value, index, translateX.value);
  }
  if (index === 0) {
    translateX.value = 0;
  }
  curIndex.value = index;
};
const hanldeSideClick = (side) => {
  if (side === "left") {
    if (curIndex.value === 0) {
      return;
    }
    curIndex.value -= 1;
  }
  if (side === "right") {
    if (curIndex.value === images.length - 1) {
      return;
    }
    curIndex.value += 1;
  }
};
</script>

<style lang="scss" scoped></style>

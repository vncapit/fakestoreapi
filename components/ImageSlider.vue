<template>
  <div class="bg-white w-[520px]">
    <div class="relative p-4">
      <img :src="images[0]" alt="Product_image" class="w-full h-[600px] object-contain" />
      <div class="absolute w-[60px] h-[100%] top-0 left-0 hover:cursor-pointer hover:bg-gradient-to-r from-slate-200"></div>
      <div class="absolute w-[60px] h-[100%] top-0 right-0 hover:cursor-pointer hover:bg-gradient-to-l from-slate-200"></div>
    </div>

    <div class="w-full bg-white h-[110px] p-2 overflow-auto">
      <div v-for="image in images" :key="image" class="p-1 mx-[2px] inline-block border border-slate-300 hover:cursor-pointer">
        <img :src="image" alt="" class="w-20 h-20 object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["images"]);
const images = props.images;
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="shadow-xl w-56 overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer hover:scale-105 transition-transform px-3 py-2 border bg-white">
    <img :src="product.image" :alt="product.category" class="w-full h-56 object-contain" />
    <div class="flex gap-1 flex-col">
      <div class="text-center text-xl font-bold mt-1 text-red-600">${{ product.price }}</div>
      <div class="flex flex-col gap-2 h-28 w-full py-1 overflow-ellipsis">
        <div class="text-sm leading-4 max-h-10 overflow-hidden text-ellipsis font-medium two-lines">{{ product.title }}
        </div>
        <div class="text-xs leading-3 max-h-16 overflow-hidden text-ellipsis five-lines">{{ product.description }}</div>
      </div>
      <div class="flex w-full p-1 justify-between">
        <Rating :rating="product.rating" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
</script>

<style lang="scss" scoped>
.two-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.five-lines {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>

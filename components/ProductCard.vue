<template>
  <div class="shadow-lg w-56 overflow-hidden flex flex-col justify-center items-center px-3 py-2">
    <img :src="product.images" :alt="product.category" class="w-full h-56 object-contain" />
    <div class="flex gap-1 flex-col">
      <div class="text-center text-xl font-semibold">${{ product.price }}</div>
      <div class="flex flex-col gap-2 h-28 w-full py-1 overflow-ellipsis">
        <div class="text-sm leading-4 max-h-10 overflow-hidden text-ellipsis font-medium two-lines">{{ product.title }}</div>
        <div class="text-xs leading-3 max-h-16 overflow-hidden text-ellipsis five-lines">{{ product.description }}</div>
      </div>
      <div class="flex w-full p-1 justify-between">
        <div>{{ product.rating.count }}</div>
        <div>{{ product.rating.rate }}</div>
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

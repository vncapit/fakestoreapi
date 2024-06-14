<template>
  <!-- <div class="bg-stale-200 flex gap-4 justify-center flex-wrap p-8"> -->
  <div class="p-5 bg-stale-200 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
    <ProductCard v-for="item in props.products" :key="item.id" :product="item" />
  </div>
</template>

<script setup>
const props = defineProps(["products"]);
console.log("product list ", props.products);
</script>

<style lang="scss" scoped></style>

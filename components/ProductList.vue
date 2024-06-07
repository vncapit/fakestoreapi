<template>
  <div class="bg-stale-200 flex gap-4 justify-center flex-wrap p-8">
    <ProductCard v-for="item in props.products" :key="item.id" :product="item" />
  </div>
</template>

<script setup>
const props = defineProps(["products"]);
</script>

<style lang="scss" scoped></style>

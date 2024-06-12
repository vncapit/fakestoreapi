<template>
  <div class="w-full">
    <h2 class="text-3xl font-semibold first-letter:uppercase">{{ product.title }}</h2>
    <p class="mt-2 text-3xl text-red-400">${{ product.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
</script>

<style lang="scss" scoped></style>

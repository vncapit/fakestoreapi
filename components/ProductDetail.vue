<template>
  <div>
    <ImageSlider :images="images" />
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
const images = [product.image, product.image, product.image, product.image, product.image, product.image, product.image];
</script>

<style lang="scss" scoped></style>

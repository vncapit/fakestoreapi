<template>
  <div class="w-full">
    <Rating :rating="product.rating" />
    <div class="flex items-center gap-3 mt-5">
      <AddCartButton :item="product" />
      <AddWishlistButton :item="product" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
</script>

<style lang="scss" scoped></style>

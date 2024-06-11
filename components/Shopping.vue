<template>
  <div>
    <div class="w-full flex items-center gap-3">
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

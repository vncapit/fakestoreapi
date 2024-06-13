<template>
  <div>
    <p class="mt-1">
      {{ product.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
</script>

<style lang="scss" scoped></style>

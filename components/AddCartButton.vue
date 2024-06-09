<template>
  <div class="flex items-center gap-2 py-1 px-2 bg-white h-10 active:scale-[98%]">
    <span class="font-semibold" style="user-select: none">ADD TO CART</span>
    <Icon name="mdi:cart-variant" color="#fde047" size="2em" />
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
const item = props.item;
</script>

<style lang="scss" scoped></style>

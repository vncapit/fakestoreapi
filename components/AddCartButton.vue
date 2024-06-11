<template>
  <div class="btn flex items-center gap-2 h-10 active:scale-[98%] hover:cursor-pointer">
    <span class="font-semibold" style="user-select: none">ADD TO CART</span>
    <Icon name="mdi:cart-variant" color="#fde047" size="2em" />
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
const item = props.item;
</script>

<style lang="scss" scoped></style>

<template>
  <div @click="handleAddCart" class="btn flex items-center gap-2 h-10 active:scale-[98%] hover:cursor-pointer">
    <span class="font-semibold" style="user-select: none">ADD TO CART</span>
    <transition>
      <Icon name="mdi:cart-variant" color="#fde047" size="2em" />
    </transition>
  </div>
</template>

<script setup>
import { CART_ACTION } from "~/enum";
const props = defineProps(["item"]);
const item = props.item;

const handleAddCart = () => {
  useCart(CART_ACTION.ADD, item);
};
</script>

<style lang="scss" scoped></style>

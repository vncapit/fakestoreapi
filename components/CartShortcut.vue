<template>
  <div v-if="loggedIn" @click="gotoCart" class="relative py-1 px-2 bg-cyan-950 rounded-md hover:cursor-pointer">
    <NuxtLink to="/cart">
      <Icon name="mdi:cart-variant" color="#fde047" size="1.8em" />
      <div v-if="cartNum" class="absolute top-[-5px] right-[-5px] bg-red-500 min-w-5 h-5 py-[1px] px-[3px] leading-5 rounded-lg text-xs text-white text-center">{{ cartNum }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const authStore = useAuthStore();
const loggedIn = computed(() => {
  return authStore.loggedIn;
});
const cartNum = computed(() => {
  return Object.keys(cartStore.cart).reduce((acc, cur) => {
    return (acc += cartStore.cart[cur].count);
  }, 0);
});
</script>

<style lang="scss" scoped></style>

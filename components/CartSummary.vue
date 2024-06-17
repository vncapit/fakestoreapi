<template>
  <div class="my-2 py-3 px-5 flex flex-col justify-center text-center gap-2 border bg-white dark:bg-cyan-950 border-slate-100 rounded-md shadow-md">
    <div class="flex justify-between">
      <div class="font-semibold text-red-500">Total: ${{ total }}</div>
      <div>
        <NuxtLink class="btn" to="/">Continue Shopping</NuxtLink>
      </div>
    </div>
    <div class="w-full">
      <NuxtLink class="btn w-full inline-block" to="/cart">CHECKOUT</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { usePrecision } from "@vueuse/math";
const props = defineProps(["cart"]);
const cart = props.cart;
const total = computed(() => {
  return Object.values(cart).reduce((acc, cur) => {
    return (acc += cur.count * cur.product.price);
  }, 0);
});
</script>

<style lang="scss" scoped></style>

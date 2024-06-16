<template>
  <div class="w-full">
    <Breadcrumb :menus="menus" />
    <div class="max-w-5xl px-2 mx-auto sm:mt-10">
      <div class="my-5 text-2xl">Shopping Cart</div>
      <div class="max-w-3xl mx-auto">
        <CartItem v-for="item in cartList" :key="item.product.id" :item="item" class="mb-4" />
        <Divider class="my-5 border-b-slate-400" />
        <CartSummary :cart="cart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const cart = computed(() => {
  return cartStore.cart;
});

const cartList = computed(() => {
  return Object.values(cart.value);
});

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cart",
    path: "/cart",
  },
];
</script>

<style lang="scss" scoped></style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useProductStore } from "@/Store/product";
import { useAuthStore } from "./store/auth";
import { useCartStore } from "./store/cart";
try {
  const authStore = useAuthStore();
  authStore.setUserInfo();
  const productStore = useProductStore();
  const res = await useFetch("https://fakestoreapi.com/products/categories");
  const categories = res.data.value;
  productStore.setCategories(categories);

  const cartStore = useCartStore();
  cartStore.loadCart();
} catch (error) {
  console.error("starting error", error);
}
</script>

<style lang="scss" scoped></style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useProductStore } from "@/Store/product";
try {
  const productStore = useProductStore();
  const res = await useFetch("https://fakestoreapi.com/products/categories");
  const categories = res.data.value;
  productStore.setCategories(categories);
} catch (error) {
  console.error("starting error", error);
}
</script>

<style lang="scss" scoped></style>

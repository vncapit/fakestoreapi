<template>
  <div>
    <CategoryList :categories="categories" />
    <ProductList :products="allProduct" />
  </div>
</template>

<script setup>
import { useProductStore } from "@/Store/product";
const productStore = useProductStore();
const categories = productStore.allCategory;
let allProduct = ref([]);
try {
  const res = await useFetch("https://fakestoreapi.com/products");
  allProduct = res.data;
} catch (error) {
  console.log("error", error);
}
</script>

<style lang="scss" scoped></style>

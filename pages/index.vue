<template>
  <div>
    <CategoryList :categories="categories" />
    <ProductList :products="allProduct" />
  </div>
</template>

<script setup>
let categories = ref([]);
let allProduct = ref([]);
try {
  const res1 = await useFetch("https://fakestoreapi.com/products/categories");
  categories = res1.data;
  const res2 = await useFetch("https://fakestoreapi.com/products");
  allProduct = res2.data;
} catch (error) {
  console.log("error", error);
}
</script>

<style lang="scss" scoped></style>

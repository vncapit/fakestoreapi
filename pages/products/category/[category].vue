<template>
  <div>
    <TitleNav :title="category" />
    <ProductList :products="items" />
  </div>
</template>

<script setup>
import { useProductStore } from "@/Store/product";
const productStore = useProductStore();
const route = useRoute();
const category = route.params.category;
if (!productStore.allCategory.includes(category)) {
  throw createError({
    statusCode: 404,
    message: "Product not found !",
    fatal: true,
  });
}
const items = ref([]);
try {
  const { data, error } = await useFetch(`https://fakestoreapi.com/products/category/${category}`);
  console.log("errr", error, data);
  items.value = [...data.value];
} catch (error) {
  console.error(error);
}
</script>

<style lang="scss" scoped></style>

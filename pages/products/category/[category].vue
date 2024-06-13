<template>
  <div>
    <Breadcrumb :menus="menus" />
    <ProductList :products="items" />
  </div>
</template>

<script setup>
import { useProductStore } from "@/Store/product";
const productStore = useProductStore();
const route = useRoute();
const category = route.params.category;
const menus = ref([])

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
  items.value = [...data.value];
  // breadcrumbs:
  menus.value.push({
    name: 'Home',
    path: '/'
  })
  menus.value.push({
    name: category,
    path: `/products/category/${category}`
  })

} catch (error) {
  console.error(error);
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div class="flex justify-between items-center mt-3 px-2 py-2 font-semibol text-2xl text-white bg-slate-900">
      <span class="first-letter:uppercase"> {{ category }}</span>
      <NuxtLink to="/" class="px-2 py-1 rounded-md hover:border-violet-500 border-2 border-slate-900">All Product</NuxtLink>
    </div>
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

<template>
  <div>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.product_id;
let product = null;
try {
  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`);
  product = data.value;
} catch (error) {
  console.error(error);
}
if (!product) {
  throw createError({
    statusCode: 404,
    message: "Product not found !",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>

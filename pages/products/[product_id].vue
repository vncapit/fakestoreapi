<template>
  <div class="bg-green-200 h-12 mt-12">
    TITLE
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
    <SlideShow :images="images" />
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.product_id;
const product = ref(null)
const images = [
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
];
try {
  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`);
  product.value = data.value;
  images.unshift(product.value.image)
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



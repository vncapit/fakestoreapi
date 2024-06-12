<template>
  <div class="max-w-screen-xl mx-auto p-1 sm:pt-16">
    <div class="grid grid-cols-1 sm:grid-cols-5 gap-x-16">
      <div class="p-2 sm:col-span-2">
        <ProductTitle :product="product" class="sm:hidden mb-4" />
        <SlideShow :images="images" />
      </div>
      <div class="p-2 sm:col-span-3">
        <ProductTitle :product="product" class="hidden sm:block" />
        <Shopping :product="product" class="mt-3" />
        <ProductDetail :product="product" class="mt-4" />
        <Suggestions :product="product" class="mt-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.product_id;
const product = ref(null);
const images = [
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg11",
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg11",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg11",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg11",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg11",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg11",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg11",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg11",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg11",
];
try {
  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`);
  product.value = data.value;
  // images.unshift(product.value.image);
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

<template>
  <div>
    <Breadcrumb :menus="menus" class="mb-5 sm:mb-10" />
    <div class="max-w-screen-2xl mx-auto p-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-16">
        <div class="sm:col-span-1 md:col-span-2">
          <ProductTitle :product="product" class="sm:hidden mb-4" />
          <SlideShow :images="images" />
        </div>
        <div class="sm:col-span-1 md:col-span-3">
          <ProductTitle :product="product" class="hidden sm:!block" />
          <Shopping :product="product" class="mt-3" />
          <ProductDetail :product="product" class="mt-4" />
          <Suggestions :product="product" class="mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.product_id;
const product = ref(null);
const menus = ref([]);
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
  images.unshift(product.value.image);

  useHead({
    title: `Cap's Shop - ${product.value.title} `,
  });

  // breadcrumbs:
  menus.value.push({
    name: "Home",
    path: "/",
  });
  menus.value.push({
    name: product.value.category,
    path: `/products/category/${product.value.category}`,
  });
  menus.value.push({
    name: product.value.title,
    path: `/products/${product.value.id}`,
  });
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

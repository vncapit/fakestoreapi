<template>
  <div>
    <h3 class="first-letter:uppercase font-semibold text-xl">{{ product.category }}</h3>
    <p class="mb-2">You may also like:</p>
    <div class="flex justify-start items-center gap-2">
      <div v-for="item in sameProducts" :key="item.id" @click="viewProduct(item)" class="w-20 h-20 md:w-32 md:h-32 border border-slate-200 bg-white hover:cursor-pointer">
        <div class="w-full h-full p-1">
          <img :src="item.image" alt="you may like" class="object-contain w-full h-full" />
          <!-- <img :src="11" alt="you may like" class="object-contain w-full h-full" /> -->
        </div>
      </div>
      <div @click="findMoreProduct" class="w-20 h-20 md:w-32 md:h-32 p-2 flex justify-center items-center border border-slate-200 text-sm hover:underline hover:cursor-pointer">
        Find more?
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
const router = useRouter();
const { data: sameCategory } = await useFetch(`https://fakestoreapi.com/products/category/${product.category}/?limit=4`);
const sameProducts = computed(() => {
  return sameCategory.value.filter((item) => item.id !== product.id);
});

const viewProduct = (item) => {
  router.push(`/products/${item.id}`);
};

const findMoreProduct = () => {
  router.push(`/products/category/${product.category}`);
};
</script>

<style lang="scss" scoped></style>

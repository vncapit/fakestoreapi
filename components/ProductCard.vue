<template>
  <div
    class="card-root select-none relative shadow-xl w-full overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer sm:hover:scale-[103%] transition-transform px-3 py-3 border bg-white dark:bg-cyan-950"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <div class="p-2 bg-white rounded-md">
        <img :src="product.image" :alt="product.category" class="w-full h-56 object-contain" />
      </div>
      <div class="flex gap-1 flex-col mt-3">
        <div class="text-center text-xl font-bold mt-1 text-red-600">${{ product.price }}</div>
        <div class="flex flex-col gap-2 h-28 w-full py-1 overflow-ellipsis">
          <div class="text-sm leading-4 max-h-10 overflow-hidden text-ellipsis font-medium two-lines">{{ product.title }}</div>
          <div class="text-xs leading-3 max-h-16 overflow-hidden text-ellipsis five-lines">{{ product.description }}</div>
        </div>
        <div class="flex w-full mt-1 mb-2 justify-between">
          <Rating :rating="product.rating" />
        </div>
      </div>
    </NuxtLink>
    <!--Add cardlist wishlist-->
    <div
      class="w-full h-14 relative md:!absolute my-1 z-10 md:bottom-0 md:translate-y-[110%] transition-transform flex justify-between items-center md:px-3 bg-white dark:bg-cyan-950 md:bg-opacity-60 md:bg-slate-900 add-card"
    >
      <AddCartButton :item="product" />
      <AddWishlistButton :item="product" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const product = props.product;
</script>

<style lang="scss" scoped>
.two-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.five-lines {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.add-card {
}

.card-root {
  &:hover {
    .add-card {
      transform: translateY(0);
    }
  }
}
</style>

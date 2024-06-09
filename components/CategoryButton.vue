<template>
  <NuxtLink
    :to="`/products/category/${category}`"
    class="p-2 font-medium shadow-2xl hover:shadow-md hover:mx-4 hover:font-bold hover:text-violet-500 hover:border-x-2 hover:border-x-violet-500 transition-all"
  >
    {{ category }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>

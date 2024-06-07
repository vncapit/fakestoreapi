<template>
  <NuxtLink :to="`/category/${category}`" class="p-2 font-medium shadow-md hover:shadow-xl hover:mx-4 hover:font-bold transition-all">
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

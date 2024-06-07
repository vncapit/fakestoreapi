<template>
  <div class="flex justify-center items-center py-2">
    <CategoryButton v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>

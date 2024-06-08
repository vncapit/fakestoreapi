<template>
  <div class="flex">
    <div class="relative">
      <img src="../assets/img/stars.webp" class="max-w-28" />
      <img src="../assets/img/stars-filled.webp" class="max-w-28 absolute top-0" :style="rateStyle" />
    </div>
    <span class="text-sm ml-2 text-red-600">{{ `${rating.rate} (${rating.count})` }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["rating"]);
const rating = props.rating;
const rateStyle = {
  clipPath: `inset(0 ${((5 - rating.rate) * 100) / 5}% 0 0)`,
};
</script>

<style lang="scss" scoped></style>

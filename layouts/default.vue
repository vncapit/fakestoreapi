<template>
  <div>
    <Header />
    <div class="min-h-[calc(100vh-2*59px)] w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: "Cap's Shop - Fake API",
  meta: [
    {
      name: "Cap's Shop",
      content: "Using Fake API",
    },
  ],
});
</script>

<style lang="scss" scoped></style>

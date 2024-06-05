<template>
  <div>
    <Header />
    <div class="min-h-[calc(100vh-2*59px)]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>
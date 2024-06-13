<template>
  <div>
    <header class="bg-slate-300 h-14 flex px-3 justify-between items-center">
      <div>
        <NuxtLink to="/" class="hidden sm:!block btn text-[16px] font-medium">Cap's Store</NuxtLink>
        <MobileMenu class="sm:hidden" />
      </div>
      <div class="flex gap-4">
        <nuxt-link to="/about" class="btn">About Us</nuxt-link>
        <nuxt-link to="login" class="btn">Login</nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  async setup() {
    const { data } = await useFetch("https://fakestoreapi.com/products/categories");
    console.log("data", data.value);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <header class="bg-teal-500 h-14 flex px-3 justify-between items-center">
      <div class="flex">
        <NuxtLink to="/" class="hidden sm:!block bg-cyan-950 text-white shadow-md px-3 py-[6px] rounded-md text-[16px] font-medium"> Cap's Store </NuxtLink>
        <MobileMenu class="sm:hidden" />
        <DarkModeSwitch />
      </div>
      <div class="flex gap-4">
        <nuxt-link to="/" class="btn hidden sm:!block">About Us</nuxt-link>
        <CartShortcut />
        <Login />
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

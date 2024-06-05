
import type { NuxtLink } from '#build/components';
<template>
  <div>
    <header class="bg-emerald-400 h-14 flex px-3 justify-between items-center">
      <NuxtLink to="/">
        <div class="text-2xl font-semibold card p-1">Fake Store API</div>
      </NuxtLink>
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
    const { data } = await useFetch('https://fakestoreapi.com/products/categories')
    console.log('data', data.value)
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
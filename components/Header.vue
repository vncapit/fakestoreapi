
import type { NuxtLink } from '#build/components';
<template>
  <div>
    <header class="bg-emerald-400 h-14 flex px-3 justify-between items-center">
      <NuxtLink to="/">
        <h1 class="text-2xl font-semibold">Fake Store API</h1>
      </NuxtLink>
      <nav>
        <NuxtLink to="/category/electronics">Electronics</NuxtLink>
      </nav>
      <span>Login</span>
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
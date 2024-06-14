<template>
  <div>
    <Icon @click="toggleMenu" name="ant-design:menu-unfold-outlined" color="#083344" size="2em"
      class="hover:cursor-pointer" />
    <div v-if="toggle" class="absolute w-screen h-screen top-0 left-0 z-50 bg-slate-800 bg-opacity-95 ">
      <div class="p-2">
        <Icon @click="toggleMenu" name="material-symbols:close" color="#eee" size="2.3em" />
      </div>
      <div>
        <nuxt-link to="/" class="font-medium text-white block">Home</nuxt-link>
        <nuxt-link v-for="category in allCategory" :key="category" :to="`/products/category/${category}`"
          class="font-medium text-white block">
          {{ category }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/Store/product';
const toggle = ref(false)
const product = useProductStore()
const allCategory = product.allCategory
const toggleMenu = () => {
  toggle.value = !toggle.value
}
</script>

<style lang="scss" scoped></style>
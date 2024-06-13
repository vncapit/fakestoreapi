<template>
  <Icon @click="toggleMenu" name="ant-design:menu-unfold-outlined" color="#083344" size="2.5em"
    class="hover:cursor-pointer" />
  <div v-if="toggle" class="absolute w-svw h-svh top-0 left-0 z-50 bg-slate-800 bg-opacity-90 ">

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
<template>
  <div>
    <Icon @click="toggleMenu" name="ant-design:menu-unfold-outlined" color="#083344" size="2em" class="hover:cursor-pointer" />
    <transition name="slide" mode="in-out">
      <div v-if="toggle" class="absolute w-screen h-screen top-0 left-0 z-50 bg-slate-800 bg-opacity-95">
        <div class="p-2">
          <Icon @click="toggleMenu" name="material-symbols:close" color="#eee" size="2.8em" class="hover:cursor-pointer" />
        </div>
        <div class="p-4 mt-5 font-medium text-2xl text-slate-50">
          <nuxt-link to="/" class="block p-[2px]">
            <span @click="toggleMenu">Home</span>
          </nuxt-link>
          <nuxt-link v-for="category in allCategory" :key="category" :to="`/products/category/${category}`" class="block p-[2px] first-letter:uppercase">
            <span @click="toggleMenu"> {{ category }}</span>
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useProductStore } from "~/Store/product";
const toggle = ref(false);
const product = useProductStore();
const allCategory = product.allCategory;
const toggleMenu = () => {
  toggle.value = !toggle.value;
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>

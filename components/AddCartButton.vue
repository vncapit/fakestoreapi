<template>
  <div @click="handleAddCart" class="btn flex items-center gap-2 h-10 active:scale-[98%] hover:cursor-pointer">
    <span class="font-semibold" style="user-select: none">ADD TO CART</span>
    <transition mode="out-in">
      <Icon v-if="showCart" name="mdi:cart-variant" color="#fde047" size="2em" />
    </transition>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "~/store/cart";
const props = defineProps(["item"]);
const item = props.item;
const showCart = ref(true);
const authStore = useAuthStore();
const cartStore = useCartStore();

const loggedIn = computed(() => {
  return authStore.loggedIn;
});

const handleAddCart = () => {
  if (!loggedIn.value) {
    authStore.setForceLogin(true);
    return;
  }

  cartStore.addOneToCart(item);

  showCart.value = false;
  setTimeout(() => {
    showCart.value = true;
  }, 200);
};
</script>

<style lang="scss" scoped>
.v-enter-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-15px);
}

.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.v-leave-active {
  transition: all 0.5s ease;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
</style>

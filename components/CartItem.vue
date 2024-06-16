<template>
  <div class="w-full py-3 px-5 flex flex-col sm:flex-row justify-center items-stretch gap-3 bg-white border border-slate-100 rounded-md shadow-md">
    <div class="w-52 h-52 sm:w-20 sm:h-20 self-center">
      <img :src="item.product.image" class="w-full h-full object-contain" alt="" />
    </div>
    <div class="flex-1 flex gap-2 flex-col justify-between">
      <div class="font-medium">{{ item.product.title }}</div>
      <div class="flex justify-between sm:justify-start gap-3 items-center">
        <div class="flex items-center border-0 border-slate-100 rounded-sm">
          <div @click="handleDelFromCart" class="p-[2px] btn hover:cursor-pointer active:opacity-70 select-none mr-1 bg-slate-800 rounded-sm">
            <Icon name="mingcute:delete-2-line" size="1.5em" color="#f1f1f1" />
          </div>
          <div @click="handleRemoveOneFromCart" class="p-[2px] btn hover:cursor-pointer active:opacity-70 select-none bg-slate-800 rounded-sm">
            <Icon name="ic:baseline-minus" size="1.5em" color="#f1f1f1" />
          </div>
          <input :value="item.count" type="text" class="max-w-11 px-2 focus:outline-none" />
          <div @click="handleAddOneToCart" class="p-[2px] btn hover:cursor-pointer active:opacity-70 select-none bg-slate-800 rounded-sm">
            <Icon name="ic:baseline-plus" size="1.5em" color="#f1f1f1" />
          </div>
        </div>
        <div>Price: ${{ item.product.price }}</div>
      </div>
    </div>
    <div class="flex flex-row-reverse sm:flex-col justify-between sm:justify-around items-center font-medium">
      <span class="font-semibold text-red-500">Total: ${{ totalPrice }}</span>
      <div>
        <NuxtLink class="btn px-[19px]" :to="`/products/category/${item.product.category}`">Go Shopping</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
const item = props.item;

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();

const totalPrice = computed(() => {
  return item.count * item.product.price;
});

const handleDelFromCart = () => {
  cartStore.delFromCart(item.product);
};

const handleRemoveOneFromCart = () => {
  cartStore.removeOneFromCart(item.product);
};

const handleAddOneToCart = () => {
  cartStore.addOneToCart(item.product);
};
</script>

<style lang="scss" scoped></style>

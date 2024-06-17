<template>
  <div class="relative ml-4 px-2 py-2 rounded-md w-16 bg-slate-800 dark:bg-slate-100">
    <div @click="toggleDark()" class="bg-slate-50 dark:bg-slate-800 w-full h-full rounded-full hover:cursor-pointer">
      <span class="absolute top-[10px] dark:left-[38px] left-[10px] w-4 h-4 rounded-full bg-slate-800 dark:bg-slate-50 !transition-all ease-in-out !duration-300"></span>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>

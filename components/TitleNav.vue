<template>
  <div class="flex justify-between items-center mt-3 px-2 py-2 font-semibol text-1xl text-white bg-slate-900">
    <div class="flex justify-center items-center gap-1">
      <Icon @click="handleClickBack" name="ic:round-arrow-back" color="#fff" size="2em" class="hover:cursor-pointer" />
      <span class="first-letter:uppercase"> {{ props.title }}</span>
    </div>
    <NuxtLink to="/" class="px-2 py-1 rounded-md hover:border-violet-500 border-2 border-slate-900">Home</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
const router = useRouter();
const handleClickBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped></style>

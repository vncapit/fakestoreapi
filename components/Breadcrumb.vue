<template>
  <div class="mt-3 px-2 py-2 font-semibol text-1xl text-white bg-slate-900">
    <div class="flex items-center gap-2">
      <Icon @click="handleClickBack" name="ic:round-arrow-back" color="#fff" size="2em" class="shrink-0 hover:cursor-pointer" />
      <span>
        <NuxtLink v-for="menu in props.menus" :key="menu.name" :to="menu.path">
          <span class="font-medium first-letter:!uppercase hover:underline">{{ menu.name }}</span>
          <span>/</span>
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["menus"]);
const router = useRouter();
const handleClickBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="bg-white py-2 w-full select-none">
    <div class="relative w-full pt-[100%]">
      <div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <transition :name="transitionMode" mode="out-in">
          <!-- <img v-if="showImage" :src="images[curIndex]" alt="Product_image" class="w-full h-full object-contain" /> -->
          <img v-if="showImage" :src="images[curIndex]" alt="Product_image" class="w-full h-full object-contain" />
        </transition>
      </div>
      <div
        @click="() => handleSideClick('left')"
        class="absolute w-[60px] h-[100%] top-0 left-0 hover:cursor-pointer hover:bg-gradient-to-r from-slate-100 transition-colors flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="-rotate-90 opacity-40" />
      </div>
      <div
        @click="() => handleSideClick('right')"
        class="absolute w-[60px] h-[100%] top-0 right-0 hover:cursor-pointer hover:bg-gradient-to-l from-slate-100 flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="rotate-90 opacity-40" />
      </div>
    </div>
    <div class="w-full mt-6 bg-white py-1 px-8 relative">
      <div
        @click="() => handleSideClick('left')"
        class="absolute w-[30px] h-[100%] top-0 left-0 hover:cursor-pointer hover:bg-gradient-to-r from-slate-100 transition-colors flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="-rotate-90 opacity-40" />
      </div>
      <div
        @click="() => handleSideClick('right')"
        class="absolute w-[30px] h-[100%] top-0 right-0 hover:cursor-pointer hover:bg-gradient-to-l from-slate-100 flex justify-center items-center"
      >
        <Icon name="material-symbols-light:assistant-navigation" color="#888" size="2.5em" class="rotate-90 opacity-40" />
      </div>
      <div class="overflow-hidden">
        <div class="w-full flex transition-transform ease-in-out bg-white" :style="{ transform: `translateX(${translateX}px)` }">
          <div v-for="(image, index) in images" :key="image" @click="handleClickThumb(index)" :class="[index === curIndex ? 'border' : '', 'border-yellow-300']">
            <div class="w-[80px] h-[80px] p-1 hover:cursor-pointer border-slate-400">
              <img :src="image" alt="" class="inline-block w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[200px] flex overflow-auto gap-4"></div>
  </div>
</template>

<script setup>
const props = defineProps(["images"]);
const images = props.images;
const translateX = ref(0);
const curIndex = ref(0);
const showImage = ref(true);
const transitionMode = ref("right-to-left");
watch(curIndex, (newValue, oldValue) => {
  console.log(newValue);
  showImage.value = false;
  nextTick(() => (showImage.value = true));
});

const handleClickThumb = (index) => {
  if (curIndex.value === index) {
    return;
  }
  if (curIndex.value < index && index !== 0) {
    // click on the right one
    transitionMode.value = "right-to-left";
    translateX.value -= 80;
  } else if (index !== 0) {
    transitionMode.value = "left-to-right";

    translateX.value += 80;
  }
  if (index === 0) {
    translateX.value = 0;
  }
  curIndex.value = index;
};
const handleSideClick = (side) => {
  if (side === "left") {
    if (curIndex.value === 0) {
      return;
    }
    handleClickThumb(curIndex.value - 1);
  }
  if (side === "right") {
    if (curIndex.value === images.length - 1) {
      return;
    }
    handleClickThumb(curIndex.value + 1);
  }
};
</script>

<style lang="scss" scoped>
.left-to-right-leave-active {
  transition: all 0.5s ease-out;
}

.left-to-right-leave-to {
  transform: translateX(100%);
}

.left-to-right-enter-active {
  transition: all 0.5s ease-out;
}

.left-to-right-enter-from {
  transform: translateX(-100%);
}

.right-to-left-leave-active {
  transition: all 0.5s ease-out;
}

.right-to-left-leave-to {
  transform: translateX(-100%);
}

.right-to-left-enter-active {
  transition: all 0.5s ease-out;
}

.right-to-left-enter-from {
  transform: translateX(100%);
}
</style>

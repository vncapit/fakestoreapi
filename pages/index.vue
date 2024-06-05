<template>
  <div>
    <div>
      <ul class="flex gap-2 justify-center">
        <li v-for="category in categories" :key="category">
          <nuxt-link :to="`/category/${category}`">
            {{ category }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    let categories = ref([])
    try {
      const { data } = await useFetch('https://fakestoreapi.com/products/categories')
      console.log(data.value)
      categories = data
    } catch (error) {
      console.log('error', error)
    }

    return {
      categories
    }
  }
}
</script>

<style lang="scss" scoped></style>
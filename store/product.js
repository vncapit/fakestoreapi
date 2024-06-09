import { defineStore } from "pinia";
export const useProductStore = defineStore({
  id: "product-store",
  state: () => {
    return {
      categories: [],
    };
  },

  getters: {
    allCategory: (state) => state.categories,
  },

  actions: {
    setCategories(newValue) {
      this.categories = [...newValue];
    },
  },
});

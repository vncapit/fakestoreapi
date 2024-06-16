import { defineStore } from "pinia";
const cartStorage = useCart();
export const useCartStore = defineStore({
  id: "cart-store",
  state: () => {
    return {
      cartState: {},
    };
  },

  getters: {
    cart: (state) => state.cartState,
  },
  actions: {
    loadCart() {
      const cart = cartStorage.getCart();
      this.cartState = cart;
    },
    addOneToCart(product) {
      if (this.cartState[product.id]) {
        this.cartState[product.id].count += 1;
      } else {
        this.cartState[product.id] = {
          count: 1,
          product,
        };
      }
      cartStorage.syncCart(this.cartState);
    },
    removeOneFromCart(product) {
      if (this.cartState[product.id] && this.cartState[product.id].count > 1) {
        this.cartState[product.id].count -= 1;
        cartStorage.syncCart(this.cartState);
      }
    },
    delFromCart(product) {
      delete this.cartState[product.id];
      cartStorage.syncCart(this.cartState);
    },
    setCart(product, count) {
      if (this.cartState[product.id]) {
        this.cartState[product.id].count = count;
      } else {
        this.cartState[product.id] = {
          count,
          product,
        };
      }
      cartStorage.syncCart(this.cartState);
    },
  },
});

import { useLocalStorage } from "@vueuse/core";

import { CART_ACTION } from "~/enum";

const cart = useLocalStorage("cart", {});

export const useCart = (action, product) => {
  if (action === CART_ACTION.ADD) {
    if (cart.value[product.id]) {
      cart.value[product.id].count += 1;
    } else {
      cart.value[product.id] = {
        count: 1,
        product,
      };
    }
  }
  if (action === CART_ACTION.SUB) {
    if (cart.value[product.id]) {
      cart.value[product.id].count -= 1;
    } else {
      cart.value[product.id] = null;
    }
  }
  if (action === CART_ACTION.DEL) {
    cart.value[product.id] = null;
  }
};

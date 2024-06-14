import { useLocalStorage } from "@vueuse/core";

const cart = useLocalStorage("cart", {});
export const useCart = () => {
  const add = (product) => {
    if (cart.value[product.id]) {
      cart.value[product.id].count += 1;
    } else {
      cart.value[product.id] = {
        count: 1,
        product,
      };
    }
  };
  const sub = (product) => {
    if (cart.value[product.id]) {
      cart.value[product.id].count -= 1;
    } else {
      cart.value[product.id] = null;
    }
  };

  const del = (product) => {
    cart.value[product.id] = null;
  };

  return { add, sub, del };
};

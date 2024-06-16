import { useLocalStorage } from "@vueuse/core";
const cartStorage = useLocalStorage(`cart`, {});
export const useCart = () => {
  const syncCart = (cart) => {
    cartStorage.value = cart;
  };
  const getCart = () => cartStorage.value;
  return { syncCart, getCart };
};

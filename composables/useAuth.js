import { useLocalStorage } from "@vueuse/core";
const userToken = useLocalStorage("token", "");

export const useAuth = () => {
  const set = (token) => {
    userToken.value = token;
  };
  const get = () => userToken.value;
  return { set, get };
};

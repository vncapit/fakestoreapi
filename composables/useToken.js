import { useLocalStorage } from "@vueuse/core";
const userToken = useLocalStorage("token", "");

export const useToken = () => {
  const setToken = (token) => {
    userToken.value = token;
  };
  const getToken = () => userToken.value;
  return { setToken, getToken };
};

import { defineStore } from "pinia";
const auth = useToken();
export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => {
    return {
      loggedInState: false,
      userInfoState: null,
      forceLoginState: false,
    };
  },

  getters: {
    loggedIn: (state) => state.loggedInState,
    userInfo: (state) => state.userInfoState,
    forceLogin: (state) => state.forceLoginState,
  },

  actions: {
    setLoggedIn(newValue) {
      this.loggedInState = newValue;
    },
    setForceLogin(newValue) {
      this.forceLoginState = newValue;
    },
    async setUserInfo() {
      try {
        if (!auth.getToken()) {
          throw new Error("Unauthorize");
        }
        const { data } = await useFetch("https://fakestoreapi.com/users/4");
        this.userInfoState = data.value;
        this.setLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    },
    logout(router) {
      this.loggedInState = false;
      auth.setToken(undefined);
      router.push("/");
    },
  },
});

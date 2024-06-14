import { defineStore } from "pinia";
const auth = useAuth();
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
        if (!auth.get()) {
          throw new Error("Unauthorize");
        }
        const { data } = await useFetch("https://fakestoreapi.com/users/4");
        this.userInfoState = data.value;
      } catch (error) {
        console.error(error);
      }
    },
    logout(router) {
      this.loggedInState = false;
      auth.set(undefined);
      router.push("/");
    },
  },
});

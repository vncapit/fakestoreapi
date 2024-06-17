<template>
  <div>
    <div>
      <div @click="toggleLoginLogout" class="relative">
        <button v-if="!loggedIn" class="btn">Login</button>
        <div v-else class="py-1 px-2 bg-cyan-950 rounded-md hover:cursor-pointer">
          <Icon name="fa6-solid:user-tie" color="#fff" size="1.8em" />
        </div>
        <div v-if="showLogOut" class="absolute top-full right-0 z-50">
          <div class="mr-5 ml-auto h-0 w-0 border-l-4 border-r-4 border-b-8 border-b-white border-l-transparent border-r-transparent"></div>
          <div class="bg-white dark:bg-cyan-950 px-2 py-1 rounded-sm shadow-md">
            <button @click.stop="handleLogout">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showLogIn || showLogOut" @click="toggleLoginLogout" class="fixed top-0 left-0 bg-opacity-0 bg-slate-300 w-full h-full z-40 flex justify-center items-center">
      <div v-if="showLogIn" @click.stop class="w-[300px] h-[250px] sm:w-[350px] px-4 py-10 border border-slate-300 bg-white rounded-md shadow-md">
        <div :class="['flex', 'justify-center', 'items-center', 'p-1', 'mb-3', 'gap-2', 'border', 'rounded-md', 'border-slate-300', { 'invalid-border': usernameInvl }]">
          <Icon name="mdi:user" color="#000" size="2em" />
          <input @input="handleValidate" v-model="username" type="text" placeholder="Username: donero" class="w-full h-6 dark:text-slate-900" style="outline: none" />
        </div>

        <div :class="['flex', 'justify-center', 'items-center', 'p-1', 'mb-3', 'gap-2', 'border', 'rounded-md', 'border-slate-300', { 'invalid-border': passwordInvl }]">
          <Icon name="mdi:password" color="#000" size="2em" />
          <input
            @input="handleValidate"
            @keydown="handleKeyDown"
            v-model="password"
            type="password"
            placeholder="Password: ewedon"
            class="w-full h-6 dark:text-slate-900"
            style="outline: none"
          />
        </div>
        <button @click="handleLogin" class="w-full h-10 rounded-md mt-4 bg-slate-800 text-slate-50">
          <span style="margin-right: 10px">Login</span>
          <Icon v-if="loading" name="eos-icons:bubble-loading" color="#eee" size="1em" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
const router = useRouter();
const authStore = useAuthStore();
const auth = useToken();
const showLogIn = ref(false);
const showLogOut = ref(false);
const loading = ref(false);
const username = ref("");
const password = ref("");
const usernameInvl = ref(false);
const passwordInvl = ref(false);

const loggedIn = computed(() => {
  return authStore.loggedIn;
});

const forceLogin = computed(() => {
  return authStore.forceLogin;
});

watch(forceLogin, (newValue, oldValue) => {
  if (newValue) {
    showLogIn.value = true;
  }
});

watch(showLogIn, (newValue, oldValue) => {
  username.value = "";
  password.value = "";
});

const toggleLoginLogout = () => {
  if (loggedIn.value) {
    showLogOut.value = !showLogOut.value;
  } else {
    showLogIn.value = !showLogIn.value;
  }
  authStore.setForceLogin(false);
};

const handleLogout = () => {
  showLogOut.value = false;
  authStore.logout(router);
};

const handleKeyDown = (key) => {
  if (key.key === "Enter") {
    handleLogin();
  }
};

const handleLogin = async () => {
  if (handleValidate()) {
    try {
      loading.value = true;
      const { data } = await useFetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      });
      loading.value = false;
      if (!data.value?.token) {
        usernameInvl.value = true;
        passwordInvl.value = true;
      } else {
        const token = data.value.token;
        auth.setToken(token);
        authStore.setLoggedIn(true);
        await authStore.setUserInfo();
        showLogIn.value = false;
      }
    } catch (error) {
      console.error(error);
      loading.value = false;
    }
  }
};

const handleValidate = () => {
  usernameInvl.value = false;
  passwordInvl.value = false;
  if (!username.value.length) {
    usernameInvl.value = true;
  } else {
  }
  if (!password.value.length) {
    passwordInvl.value = true;
  }
  return !usernameInvl.value && !passwordInvl.value;
};
</script>

<style lang="scss" scoped>
.invalid-border {
  border-color: #f22;
}
</style>

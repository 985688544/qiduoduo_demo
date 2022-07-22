import { defineStore } from "pinia";
import { store } from "/@/stores";

type Nullable<T> = T | null;

interface UserInfo {
  userId: string;
  menus: Menus[];
  username: string;
  realName: string;
  avatar?: string;
  desc: string;
  password?: string;
  token: string;
}

interface Menus {
  label: string;
  path: string;
}

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  menus: [];
}

const useUserStore = defineStore({
  persist: {
    key: "user_formmat",
    storage: window.sessionStorage,
    beforeRestore: (context) => {
      // console.log(context);
    },
    afterRestore: (context) => {
      // console.log("After hydration...", context);
    },
  },
  id: "app-user",
  state: (): UserState => {
    return {
      // user info
      userInfo: null,
      // token
      token: undefined,
      menus: [],
    };
  },

  actions: {
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      sessionStorage.setItem("userInfo", JSON.stringify(info));
    },
    setToken(token: string) {
      this.token = token;
      if (token) {
        sessionStorage.setItem("token", token);
      }
    },
    setMenus(menus: Menus[] | null) {
      this.menus = menus;
    },
    getMenus(): Menus[] | null {
      return this.menus;
    },
    getUserInfo(): UserInfo | null {
      const info = sessionStorage.getItem("userInfo") || "";
      return JSON.parse(info);
    },
    getToken(): string {
      const token = sessionStorage.getItem("token") || "";
      return token;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreHook() {
  return useUserStore(store);
}

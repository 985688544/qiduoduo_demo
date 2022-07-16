import { defineStore } from "pinia";
import { store } from "/@/stores";

type Nullable<T> = T | null;
interface UserInfo {
  userID: string;
}

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
}

const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
  }),
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

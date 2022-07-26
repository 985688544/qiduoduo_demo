import { Router } from "vue-router";
import { useUserStoreHook } from "/@/stores/modules/user";

declare type Recordable<T = any> = Record<string, T>;

export function setupRouterGuard(router: Router) {
  createPageAuth(router);
}

// 判断除去白名单中的path
const writePathList: string[] = ["/login", "dashboard"];

function createPageAuth(router) {
  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if (writePathList.includes(to.path)) {
      next();
      return;
    } else {
      const userStore = useUserStoreHook();
      const isToken = userStore.getToken();

      if (isToken) {
        next();
      } else {
        // redirect login page
        const redirectData: {
          path: string;
          replace: boolean;
          query?: Recordable<string>;
        } = {
          path: "/login",
          replace: true,
        };
        if (to.path) {
          redirectData.query = {
            ...redirectData.query,
            redirect: to.path,
          };
        }

        next(redirectData);
        return;
      }
    }
  });
}

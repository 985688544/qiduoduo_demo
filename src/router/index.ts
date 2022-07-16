import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStoreHook } from "../stores/modules/user";
const routes = {
  public: [
    {
      path: "/",
      redirect: () => {
        const user = useUserStoreHook();

        if (user.getToken()) {
          console.log("jinru");
          return "/home";
        } else {
          return "/login";
        }
      },
    },
    {
      path: "/login",
      component: () => import("/@/views/login.vue"),
    },
    {
      path: "/home",
      component: () => import("/@/views/HomeView.vue"),
    },
  ],
  // permits: Object.values(permitModel),
};

const newRouter = () => {
  return createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: routes.public,
  });
};

const router = newRouter();
export { router, routes };

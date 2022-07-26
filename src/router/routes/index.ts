import dashboard from "/@/router/modules/dashbord";
import account from "/@/router/modules/account";
import { PageEnum } from "/@/enum/page";

const moduleRoute = [dashboard, account];

const RootRouter = [
  {
    path: "/",
    name: "Root",
    redirect: PageEnum.BASE_PAGE,
    meta: {
      title: "Root",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/login.vue"),
    meta: {
      title: "login",
    },
  },
];

export const BasicRouter = [...RootRouter, ...moduleRoute];

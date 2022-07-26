import { LAYOUT } from "/@/router/constant";
import type { RouteRecordRaw } from "vue-router";

const account: RouteRecordRaw = {
  path: "/account",
  name: "Account",
  component: LAYOUT,
  redirect: "/account/list",
  meta: {
    orderNo: 1,
    icon: "ion:grid-outline",
    title: "账户",
  },
  children: [
    {
      path: "list",
      name: "list",
      component: () => import("/@/views/account/index.vue"),
    },
  ],
};

export default account;

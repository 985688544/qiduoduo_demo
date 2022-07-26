import { LAYOUT } from "/@/router/constant";
import type { RouteRecordRaw } from "vue-router";

const dashboard: RouteRecordRaw = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
    title: "分析",
  },
  children: [
    {
      path: "analysis",
      name: "analysis",
      component: () => import("/@/views/sys/analysis/index.vue"),
    },
  ],
};

export default dashboard;

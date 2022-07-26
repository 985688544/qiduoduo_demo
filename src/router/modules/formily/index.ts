import { LAYOUT } from "/@/router/constant";
import type { RouteRecordRaw } from "vue-router";

const formily: RouteRecordRaw = {
  path: "/formily",
  name: "Formily",
  component: LAYOUT,
  redirect: "/account/observable",
  meta: {
    orderNo: 1,
    icon: "ion:grid-outline",
    title: "Formily",
  },
  children: [
    {
      path: "observable",
      name: "observable",
      component: () => import("/@/views/formily/observable/index.vue"),
    },
    {
      path: "autorun",
      name: "autorun",
      component: () => import("/@/views/formily/autorun/index.vue"),
    },
    {
      path: "reaction",
      name: "reaction",
      component: () => import("/@/views/formily/reaction/index.vue"),
    },
    {
      path: "batch",
      name: "batch",
      component: () => import("/@/views/formily/batch/index.vue"),
    },
    {
      path: "action",
      name: "action",
      component: () => import("/@/views/formily/action/index.vue"),
    },

    {
      path: "define",
      name: "define",
      component: () => import("/@/views/formily/define/index.vue"),
    },
    {
      path: "model",
      name: "model",
      component: () => import("/@/views/formily/model/index.vue"),
    },
    {
      path: "observe",
      name: "observe",
      component: () => import("/@/views/formily/observe/index.vue"),
    },
    {
      path: "markRaw",
      name: "markRaw",
      component: () => import("/@/views/formily/markRaw/index.vue"),
    },
    {
      path: "markObservable",
      name: "markObservable",
      component: () => import("/@/views/formily/markObservable/index.vue"),
    },
    {
      path: "raw",
      name: "raw",
      component: () => import("/@/views/formily/raw/index.vue"),
    },
    {
      path: "markRaw",
      name: "markRaw",
      component: () => import("/@/views/formily/markRaw/index.vue"),
    },
    {
      path: "toJs",
      name: "toJs",
      component: () => import("/@/views/formily/toJs/index.vue"),
    },
    {
      path: "untracked",
      name: "untracked",
      component: () => import("/@/views/formily/untracked/index.vue"),
    },
    {
      path: "hasCollected",
      name: "hasCollected",
      component: () => import("/@/views/formily/hasCollected/index.vue"),
    },
    {
      path: "tracker",
      name: "tracker",
      component: () => import("/@/views/formily/tracker/index.vue"),
    },
    {
      path: "typeChekcer",
      name: "typeChekcer",
      component: () => import("/@/views/formily/typeChekcer/index.vue"),
    },
  ],
};

export default formily;

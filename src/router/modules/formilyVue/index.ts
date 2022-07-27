import { LAYOUT } from "/@/router/constant";
import type { RouteRecordRaw } from "vue-router";

const formilyVue: RouteRecordRaw = {
  path: "/formilyVue",
  name: "FormilyVue",
  component: LAYOUT,
  redirect: "/formilyVue/arrayField",
  meta: {
    orderNo: 1,
    icon: "ion:grid-outline",
    title: "Formily",
  },
  children: [
    {
      path: "field",
      name: "Field",
      component: () => import("/@/views/formilyVue/field/index.vue"),
    },
    {
      path: "arrayField",
      name: "ArrayField",
      component: () => import("/@/views/formilyVue/arrayField/index.vue"),
    },
    {
      path: "objectField",
      name: "ObjectField",
      component: () => import("/@/views/formilyVue/objectField/index.vue"),
    },
    {
      path: "schemaFieldMarkup",
      name: "SchemaFieldMarkup",
      component: () =>
        import("/@/views/formilyVue/schemaFieldMarkup/index.vue"),
    },
    {
      path: "schemaFieldJson",
      name: "SchemaFieldJson",
      component: () => import("/@/views/formilyVue/schemaFieldJson/index.vue"),
    },
    {
      path: "recursionField",
      name: "RecursionField",
      component: () => import("/@/views/formilyVue/recursionField/index.vue"),
    },

    {
      path: "selfRecursionField",
      name: "SelfRecursionField",
      component: () =>
        import("/@/views/formilyVue/selfRecursionField/index.vue"),
    },
    {
      path: "formProvider",
      name: "FormProvider",
      component: () => import("/@/views/formilyVue/formProvider/index.vue"),
    },
    {
      path: "formConsumer",
      name: "FormConsumer",
      component: () => import("/@/views/formilyVue/formConsumer/index.vue"),
    },
  ],
};

export default formilyVue;

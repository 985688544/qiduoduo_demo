import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { BasicRouter } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: BasicRouter as unknown as RouteRecordRaw[],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

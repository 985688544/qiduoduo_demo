import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import "./assets/main.css";
import { setupStore } from "./stores";
import { setupRouter, router } from "./router";
import { setupRouterGuard } from "./router/guard";

function bostStarp() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupRouterGuard(router);

  app.use(Antd);

  app.mount("#app");
}

bostStarp();

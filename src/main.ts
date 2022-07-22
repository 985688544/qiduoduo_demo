import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import { router } from "./router";
import "./assets/main.css";
import { setupStore } from "./stores";

function bostStarp() {
  const app = createApp(App);

  setupStore(app);

  app.use(Antd).use(router);

  app.mount("#app");
}

bostStarp();

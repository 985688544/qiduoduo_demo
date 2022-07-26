import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const store = createPinia();

// 注入缓存机制
store.use(piniaPluginPersistedstate);
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };

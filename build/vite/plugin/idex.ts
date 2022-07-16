import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { configMockPlugin } from "./mock";

export function createVitePlugins() {
  const vitePlugins = [vue(), vueJsx()];
  vitePlugins.push(configMockPlugin());
  return vitePlugins;
}

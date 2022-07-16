import { defineConfig } from "vite";
import { resolve } from "path";
import { createVitePlugins } from "./build/vite/plugin/idex";
import { createProxy } from "./build/vite/proxy";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [createVitePlugins()],
  define: {
    "process.env": {},
  },
  server: {
    https: false,
    // Listening on all local IPs
    host: true,
    open: true,
    port: 8344,
    // Load proxy configuration from .env
    proxy: createProxy([["/basic-api", "http://localhost:8344"]]),
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/",
      },
      {
        find: /\/#\//,
        replacement: pathResolve("types") + "/",
      },
    ],
  },
});

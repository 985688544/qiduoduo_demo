/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from "vite-plugin-mock";
export function configMockPlugin() {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: true,
    prodEnabled: true,
    injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
    logger: false,
  });
}

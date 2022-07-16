import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import sys from "./sys";
// const modules = import.meta.globEager("./**/*.ts");

const mockModules: any[] = [sys];
// Object.keys(modules).forEach((key) => {
//   if (key.includes("/_")) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}

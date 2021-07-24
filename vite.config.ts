/*
 * @Author: lu
 * @Date: 2021-07-24 14:15:43
 * @LastEditTime: 2021-07-24 17:10:55
 * @FilePath: \vue3-ts-study\vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    }
  }
});

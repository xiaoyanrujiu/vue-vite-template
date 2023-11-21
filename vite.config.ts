import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    host: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // modifyVars: {
        // 	"primary-color": "#1DA57A",
        // },
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variable.scss";`
      }
    }
  }
});

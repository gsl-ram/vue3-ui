import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // <-- Add this import

export default defineConfig({
  plugins: [vue()], // <-- Add the plugin here
  build: {
    lib: {
      entry: "src/index.ts",
      name: "RdmVue3UiButtons",
      fileName: "buttons",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
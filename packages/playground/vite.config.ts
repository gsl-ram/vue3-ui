import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // <-- Add this import

export default defineConfig({
  plugins: [vue()], // <-- Add the plugin here

  resolve: {
    alias: {
      // Point the package name to its source directory
      "@ramdayal.m/vue3-ui-buttons-local": "../buttons/src",
    },
  },
});

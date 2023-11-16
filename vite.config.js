// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set your preferred limit in kilobytes for the warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          // You can customize this logic to create manual chunks if needed
          if (id.includes("node_modules/lottie-web")) {
            return "lottie-web";
          }
        },
      },
    },
  },
});

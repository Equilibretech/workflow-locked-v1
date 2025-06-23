import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/workflow-locked-v1/",
  build: {
    outDir: "./site"
  },
  server: {
    port: 5174
  }
});
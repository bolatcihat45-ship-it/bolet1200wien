import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  publicDir: "public",
  server: { host: "0.0.0.0" },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        privacy: resolve(process.cwd(), "privacy.html"),
        terms: resolve(process.cwd(), "terms.html")
      }
    }
  }
});

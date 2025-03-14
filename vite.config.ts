import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Ecommerce",
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            "preset-default",
            "removeTitle",
            "removeDesc",
            "removeDoctype",
            "cleanupIds",
          ],
        },
      },
    }),
  ],
  build: {
    outDir: "./build",
    minify: "terser",
    sourcemap: "hidden",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});

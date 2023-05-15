import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    proxy: {
      "^/images/*": {
        target: "https://test-front.framework.team/",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [react(), tsconfigPaths()],
});

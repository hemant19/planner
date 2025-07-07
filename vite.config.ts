import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [reactRouter(), tsconfigPaths(), devtoolsJson()],
});

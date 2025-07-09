import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  define: {
    "process.env.TEMPLATE_IMAGE_URL": JSON.stringify(process.env.TEMPLATE_IMAGE_URL),
  },
  plugins: [reactRouter(), tsconfigPaths(), devtoolsJson()],
});

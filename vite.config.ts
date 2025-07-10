import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  define: {
    "process.env.TEMPLATE_IMAGE_URL": JSON.stringify(process.env.TEMPLATE_IMAGE_URL),
    "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
    "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
    "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
    "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
  },
  plugins: [reactRouter(), tsconfigPaths(), devtoolsJson()]
});

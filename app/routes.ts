import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx"),
  route("dashboard", "routes/Dashboard.tsx"),
  route("signin", "routes/SignInSide.tsx")
] satisfies RouteConfig;

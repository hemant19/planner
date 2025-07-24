import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx"),
  route("dashboard", "routes/Dashboard.tsx", [
    index("routes/dashboard/Index.tsx"),
    route("overview", "routes/dashboard/Overview.tsx"),
    route("equity", "routes/dashboard/Equity.tsx"),
    route("transactions", "routes/dashboard/Transactions.tsx"),
  ]),
  route("signin", "routes/SignInSide.tsx")
] satisfies RouteConfig;

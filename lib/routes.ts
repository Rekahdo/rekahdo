const ROUTE = {
  root: "/",
  dashboard: {
    root: "/dashboard",
  },
  service: {
    root: "/service/",
  },
  test: {
    root: "/test",
  },
  auth: {
    root: "/auth",
  },
} as const;

export const SERVICE_ROUTE = ROUTE.service.root;
export const AUTH_ROUTE = ROUTE.auth.root;
export const PORTFOLIO_ROUTE = ROUTE.root;
export const DASHBOARD_ROUTE = ROUTE.dashboard.root;
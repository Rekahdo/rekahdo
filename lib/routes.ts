export const ADMIN_ROUTES = {
  root: "/admin",
  dashboard: {
    root: "/admin/dashboard",
  },
} as const;

export const ADMIN = ADMIN_ROUTES.root;
export const DASHBOARD = ADMIN_ROUTES.dashboard;

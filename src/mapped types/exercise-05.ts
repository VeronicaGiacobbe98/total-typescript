type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

type RouteMap = {
  [K in Route as K["route"]]: K["search"];
};

const routes: RouteMap = {
  "/": { page: "1", perPage: "10" },
  "/about": {},
  "/admin": {},
  "/admin/users": {},
};

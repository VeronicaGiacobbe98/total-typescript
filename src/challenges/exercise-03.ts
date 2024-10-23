type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type ExtractSearch<T> = T extends { search: infer S } ? S : never;

type RoutesObject = {
  [R in Route as R["route"]]: ExtractSearch<R>;
};

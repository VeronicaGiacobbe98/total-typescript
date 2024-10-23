type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [R in Route]: R;
};

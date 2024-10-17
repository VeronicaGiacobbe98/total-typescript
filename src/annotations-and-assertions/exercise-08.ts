type Route = {
  component: "Home" | "About";
};

type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends object ? ReadonlyDeep<T[P]> : T[P];
};

const routes = {
  "/": {
    component: "Home",
  },
  "/about": {
    component: "About",
    // @ts-expect-error
    search: "?foo=bar",
  },
} satisfies ReadonlyDeep<Record<string, Route>>;

// @ts-expect-error
routes["/"].component = "About";

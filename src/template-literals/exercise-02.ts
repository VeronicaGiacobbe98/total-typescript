type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Routes extends `${string}/:id` ? Routes : never;

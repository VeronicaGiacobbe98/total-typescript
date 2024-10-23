type ExtractPathParams<Path extends string> =
  Path extends `${infer _Prefix}/:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractPathParams<`/${Rest}`>]: string }
    : Path extends `${infer _Prefix}/:${infer Param}`
    ? { [K in Param]: string }
    : {};

type UserPath = "users/:id";
type Result = ExtractPathParams<UserPath>;

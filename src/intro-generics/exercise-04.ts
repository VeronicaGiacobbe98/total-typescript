const returnTypedParams = <T extends string, U extends number>(params: {
  a: T;
  b: U;
}) => {
  return {
    first: params.a,
    second: params.b,
  };
};

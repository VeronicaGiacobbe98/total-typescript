const acceptAnythingExceptNullOrUndefined = (
  input:
    | {}
    | string
    | number
    | boolean
    | symbol
    | Function
    | Error
    | RegExp
    | any[]
) => {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined");
  }
};
acceptAnythingExceptNullOrUndefined("hello");
acceptAnythingExceptNullOrUndefined(42);
acceptAnythingExceptNullOrUndefined(true);
acceptAnythingExceptNullOrUndefined(Symbol("foo"));
acceptAnythingExceptNullOrUndefined({});
acceptAnythingExceptNullOrUndefined([]);
acceptAnythingExceptNullOrUndefined(() => {});
acceptAnythingExceptNullOrUndefined(/foo/);
acceptAnythingExceptNullOrUndefined(new Error("foo"));

// @ts-expect-error
acceptAnythingExceptNullOrUndefined(null);

// @ts-expect-error
acceptAnythingExceptNullOrUndefined(undefined);

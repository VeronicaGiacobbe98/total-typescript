type MaybeError = Error | undefined;

type CreateDataShape<TData, TError extends MaybeError = undefined> = {
  data: TData;
  error: TError;
};

type ExampleWithOnlyData = CreateDataShape<number>;
type ExampleWithError = CreateDataShape<number, Error>;

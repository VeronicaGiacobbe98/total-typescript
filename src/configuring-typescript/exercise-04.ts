type EnforceError<TError> = TError extends { message: string } ? TError : never;

type Result<TResult, TError = Error> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      error: EnforceError<TError>;
    };

type BadExample = Result<{ id: string }, string>;

type GoodExample = Result<{ id: string }, TypeError>;
type GoodExample2 = Result<{ id: string }, { message: string; code: number }>;
type GoodExample3 = Result<{ id: string }, { message: string }>;
type GoodExample4 = Result<{ id: string }>;

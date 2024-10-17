const UNKNOWN_CODE = 8000;

type ErrorWithCode = {
  message: string;
  code?: number;
};

const addCodeToError = <TError extends ErrorWithCode>(error: TError) => {
  return {
    ...error,
    code: error.code ?? UNKNOWN_CODE,
  };
};

const error = { message: "An error occurred" };
const result = addCodeToError(error);
console.log(result);

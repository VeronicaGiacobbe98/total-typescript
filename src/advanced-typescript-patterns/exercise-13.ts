class CustomError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "CustomError";
  }
}

const handleCustomError = (error: unknown) => {
  if (error instanceof CustomError) {
    console.error(error.code);
  }
};

const customError = new CustomError("Oh no", 401);
handleCustomError(customError);

type PromiseFunc<T> = () => Promise<T>;

const safeFunction =
  <T>(func: PromiseFunc<T>) =>
  async (): Promise<T | Error> => {
    try {
      const result = await func();
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };

const exampleFunction: PromiseFunc<number> = async () => {
  return 42;
};

const errorFunction: PromiseFunc<number> = async () => {
  throw new Error("Something went wrong!");
};

const safeExampleFunction = safeFunction(exampleFunction);
const safeErrorFunction = safeFunction(errorFunction);

const testSafeFunctions = async () => {
  const result = await safeExampleFunction();
  const errorResult = await safeErrorFunction();

  console.log(result);
  console.log(errorResult);
};

testSafeFunctions();

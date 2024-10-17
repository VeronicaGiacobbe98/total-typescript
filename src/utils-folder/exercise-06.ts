type PromiseFunc<TResult, TArgs extends any[]> = (
  ...args: TArgs
) => Promise<TResult>;

const safeFunction = <TResult, TArgs extends any[]>(
  func: PromiseFunc<TResult, TArgs>
) => {
  return async (...args: TArgs): Promise<TResult | Error> => {
    try {
      const result = await func(...args);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };
};

const func = safeFunction((name: string) => {
  return Promise.resolve(`hello ${name}`);
});

console.log(func);

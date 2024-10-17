type PromiseFunc<Input, Output> = (input: Input) => Promise<Output>;

type Example1 = PromiseFunc<string, string>;

type Example2 = PromiseFunc<boolean, number>;

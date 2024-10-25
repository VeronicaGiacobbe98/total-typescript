import { z, ZodSchema } from "zod";

const makeZodSafeFunction = <TSchema extends ZodSchema, TResult>(
  schema: TSchema,
  func: (arg: z.infer<TSchema>) => TResult
) => {
  return (arg: unknown): TResult => {
    const result = schema.parse(arg);
    return func(result);
  };
};

const addTwoNumbersArg = z.object({
  a: z.number(),
  b: z.number(),
});

const addTwoNumbers = makeZodSafeFunction(
  addTwoNumbersArg,
  (args) => args.a + args.b
);

const result = addTwoNumbers({ a: 3, b: 5 });
console.log(result);

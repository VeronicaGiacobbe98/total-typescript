function sum(values: { a: number; b: number }): number;
function sum(a: number, b: number): number;
function sum(valuesOrA: any, b?: number): number {
  if (typeof valuesOrA === "object") {
    return valuesOrA.a + valuesOrA.b;
  }
  return valuesOrA + b!;
}

it("Should error in TS when passed incorrect arguments", () => {
  // @ts-expect-error
  sum({ a: 1, b: 2 }, 2);

  sum({ a: 1, b: 2 });
});

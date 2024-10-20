const uniqueArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};
it("returns an array of unique values", () => {
  const result = uniqueArray([1, 1, 2, 3, 4, 4, 5]);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("should work on strings", () => {
  const result = uniqueArray(["a", "b", "b", "c", "c", "c"]);

  expect(result).toEqual(["a", "b", "c"]);
});

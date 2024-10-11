export const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};

const result = concatTwoStrings("Hello", "World");

console.log(result);

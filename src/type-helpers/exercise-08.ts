type NonEmptyArray<T> = [T, ...Array<T>];

const validArray: NonEmptyArray<number> = [1];
const validArrayWithMultipleElements: NonEmptyArray<string> = [
  "hello",
  "world",
];

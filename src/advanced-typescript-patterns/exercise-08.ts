export const values = ["a", "b", undefined, "c", undefined];

function isString(value: string | undefined): value is string {
  return value !== undefined;
}

const filteredValues = values.filter(isString);

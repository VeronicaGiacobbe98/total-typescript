import _ from "lodash";

const groupByAge = <T extends { age: number }>(
  array: T[]
): _.Dictionary<T[]> => {
  const grouped = _.groupBy(array, "age");

  return grouped;
};

const result = groupByAge([
  { name: "John", age: 20, id: 1 },
  { name: "Jane", age: 25, id: 2 },
  { name: "Doe", age: 20, id: 3 },
]);

console.log(result);

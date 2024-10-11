const parsedData = JSON.parse('{"name": "Alice", "age": 30}') as {
  name: string;
  age: number;
};
console.log(parsedData);

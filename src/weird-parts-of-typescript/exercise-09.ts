const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? "true" : "false"),
};

function format(input: string): string;
function format(input: number): string;
function format(input: boolean): string;
function format(input: string | number | boolean): string {
  if (typeof input === "string") {
    return objOfFunctions.string(input);
  } else if (typeof input === "number") {
    return objOfFunctions.number(input);
  } else {
    return objOfFunctions.boolean(input);
  }
}

const formattedString = format("hello");
const formattedNumber = format(123.456);
const formattedBoolean = format(true);

console.log(formattedString);
console.log(formattedNumber);
console.log(formattedBoolean);

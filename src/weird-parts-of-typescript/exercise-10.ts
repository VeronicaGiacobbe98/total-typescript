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

type Result =
  | { success: true; data: any }
  | { success: false; error: SyntaxError | DOMException };

const getUserFromLocalStorage = (id: string): Result => {
  try {
    const user = localStorage.getItem(id);
    if (!user) {
      return { success: true, data: undefined };
    }

    return { success: true, data: JSON.parse(user) };
  } catch (e) {
    if (e instanceof DOMException || e instanceof SyntaxError) {
      return { success: false, error: e };
    }
    throw e;
  }
};

const formattedString = format("hello");
const formattedNumber = format(123.456);
const formattedBoolean = format(true);

const userResult = getUserFromLocalStorage("user-1");

if (userResult.success) {
  console.log("User data:", userResult.data);
} else {
  console.error("Error retrieving user:", userResult.error);
}

console.log(formattedString);
console.log(formattedNumber);
console.log(formattedBoolean);

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

let type: "button" | "submit" | "reset" = "button";

const buttonAttributes: ButtonAttributes = {
  type,
};

console.log(buttonAttributes);

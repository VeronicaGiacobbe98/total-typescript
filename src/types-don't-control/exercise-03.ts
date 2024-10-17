import Diff from "diff";

const message = "Hello, world!";
const secondMessage = "Goodbye, world!";

const differences = Diff.diffChars(message, secondMessage);
console.log(differences);

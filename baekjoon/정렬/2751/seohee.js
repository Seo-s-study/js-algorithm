const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const result = input.sort((a, b) => a - b).join("\n");
console.log(result);

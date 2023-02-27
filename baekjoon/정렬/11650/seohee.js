const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let printResult = "";
const result = input
  .map((data) => data.trim().split(" "))
  .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

result.forEach((data) => (printResult += `${data[0]} ${data[1]}\n`));
console.log(printResult);

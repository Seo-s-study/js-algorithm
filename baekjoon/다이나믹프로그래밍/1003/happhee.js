const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((data) => {
  let resultCount = new Array(2).fill(0);
  function fibonacci(number) {
    return number <= 1
      ? resultCount[number]++
      : fibonacci(number - 1) + fibonacci(number - 2);
  }
  fibonacci(data);
  console.log(resultCount.join(" "));
});

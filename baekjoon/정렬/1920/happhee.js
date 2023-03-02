const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const answerArray = input[1].split(" ").sort((a, b) => a - b);
const compareArray = input[3].split(" ");
// 이진탐색
function binarySearch(answerArray, compareArray) {
  const answer = [];

  compareArray.forEach((data) => {
    let [start, end, mid, isInclude] = [0, answerArray.length - 1, 0, false];
    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (data < answerArray[mid]) {
        end = mid - 1;
      } else if (data > answerArray[mid]) {
        start = mid + 1;
      } else {
        isInclude = true;
        break;
      }
    }
    answer.push(isInclude ? 1 : 0);
  });
  console.log(answer.join("\n"));
}

binarySearch(answerArray, compareArray);

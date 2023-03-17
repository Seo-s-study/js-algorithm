const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const len = input.shift();
const fiboX=[]
const fiboY=[]

fiboX[0]=0;
fiboY[0]=0;
fiboX[1]=0;
fiboY[1]=1;


for(let i=2;i<=Math.max(input);i++){
    fiboY[i]=fiboY[i-1]+fiboY[i-2]
    fiboX[i]=fiboY[i-1]
}

fiboX[0]=1;

input.map(function(i){
    console.log(fiboX[i]+" "+fiboY[i])
})
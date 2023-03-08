const input = require('fs').readFileSync('example.txt').toString().trim().split("\n");

const len = input.shift();
const fibo=[]

fibo.push([1,0])
fibo.push([0,1])


for(let i=0;i<len;i++){
    const x=input[i];


    for(let j=2;j<=x;j++){
        fibo[j] = [
            fibo[j-1][0] + fibo[j-2][0], 
            fibo[j-1][1] + fibo[j-2][1]
        ]
    }
}
for(let i=0;i<len;i++){
    console.log(fibo[i][0]+" "+fibo[i][1])
}

//런타임 에러...
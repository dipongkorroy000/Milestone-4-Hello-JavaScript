function mulNum(number){
    let result = number * 10;
    return result;
}
function halfNum(number){
    let half = number / 2;
    return half;
}
function add(n1,n2){
    let answer = n1 + n2;
    return answer;
}
//alternative---
function numAdd(n1,n2){
    return n1 + n2;
}

let output = mulNum(25);
console.log(output);

let answer = halfNum(36);

let sum = add(20,65);

let jog = numAdd(32,68);

console.log(answer,sum,jog);


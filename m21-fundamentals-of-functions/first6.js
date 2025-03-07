function doMath(p1,p2){
    const sum1 = p1 + p2;
    const mul1 = p1 - p2;
    const multiply = sum1 * mul1;
    return multiply / 2;
}
function isEven(n){
    if(n % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function isOdd(n){
    if(n % 2 === 1){
        return true;
    }
    return false;
}

let mathAns = doMath(60,25);
console.log(mathAns);

console.log(isEven(10));
console.log(isOdd(255));


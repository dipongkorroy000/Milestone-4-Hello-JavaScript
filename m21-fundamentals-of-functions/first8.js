// function sumOfNumbers(arrayNum){
//     let d = 0;
// for(let s of arrayNum){
//     d = s + d;
// }
// return d;
// }
function sumOfEvenNumbers(numberValue){
    let d = 0;
    for(let s of numberValue){
        if(s % 2 === 0){
            d = d + s;
        }
    }
    return d;
}

// let a = [44,36,95,25];
// let sum = sumOfNumbers(a);
// console.log(sum);

// let d = [20,21,22,23,53,36,95];
// let s = sumOfEvenNumbers(d);
// console.log(s);
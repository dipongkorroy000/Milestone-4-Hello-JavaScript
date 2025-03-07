/*
* ternary --> three parts
*
* condition ? do something when true : do something when false
*/ 
// type-1
// const age = 20;
// if(age >= 18){
//     console.log("you can vote.");
// }
// else{
//     console.log('you can not vote.')
// }

// alternative rule 

// const age = 12;
// age >= 18 ? console.log('you can vote') : console.log('you can not vote')

// type-2 
// let price = 500;
// const isLeader = false;

// if(isLeader == true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log('amount of price =', price)

// alternative rule 
// let price = 500;
// let isLeader = false;
// price = isLeader === true ? 0 : price + 100;
// console.log(price)

// type-3 
// let price = 700;
// let isLeader = true;

// if(isLeader === false){
//     if(price >= 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 150;
// }
// console.log('price of Amount =', price);

// alternative rule 
// let price = 1600;
// let isLeader = true;
// price = isLeader === true ?
//         price >= 1000 ?
//             price / 2 : 0
//         : price + 150;
// console.log('price of Amount =', price);
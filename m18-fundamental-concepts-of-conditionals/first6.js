// Type-1
// const price = 4500;

// if(price >= 5000){
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else if(price >= 2500){
//     const payAmount = price - (price * 5 / 100);
//     console.log(payAmount);
// }
// else{
//     console.log(price);
// }

//  type-2
const age = 62;
const price = 500;
if(age <= 12){
    console.log("you can eat for free");
}
else if (age >= 60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log("you can pay 50% =", payAmount);
}
else{
    console.log(price);
}
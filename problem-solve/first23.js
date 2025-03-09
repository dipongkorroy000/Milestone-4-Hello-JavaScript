// task-1-->
// Find the lowest number in the array below.?
// function lowestNum(arrayNum){
//     let div = arrayNum[0];
//     for(let a of arrayNum){
//         if(div > a){
//             div = a;
//         }
//     }
//     return div;
// }
// console.log(lowestNum([167,190,120,165,137]));

//task-2--->
// Find the friend with the smallest name.?
// function middleName(array){
//     let div = array[0];
//     for(const s of array){
//         if(div.length > s.length){
//             div = s;
//         }
//     }
//     return div;
// }
// console.log(middleName(['rahim', 'robin', 'rafi', 'ron', 'rashed','rana']));

//task-3--->
// function calculateElectronicsBudge(laptopQuantity,tabletQuantity,mobileQuantity){
//     const laptop = 35000;
//     const tablet = 15000;
//     const mobile = 20000;
//     let laptopPrice = laptopQuantity * laptop;
//     let tabletPrice = tabletQuantity * tablet;
//     let mobilePrice = mobileQuantity * mobile;
//     let totalPrice = laptopPrice + tabletPrice + mobilePrice;
//     return totalPrice + ' ' + 'tk';
// }
// console.log(calculateElectronicsBudge(7,3,12));

//task-4--->
// function price(array){
//     let priceTotal = 0;
//     let divNum = [];
//     for(i = 0;i < array.length;i++){
//         priceTotal += array[i].price;
//         divNum.push(i);
//     }
//     return Math.round(priceTotal / divNum.length);
// }
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// console.log(price(phones));

// task-5-->
function ncsInvestment(money){
    let totalCost = 0;
    for(i = 0;i < money.length;i++){
        let multiply = money[i].experience * money[i].increment;
        let sum = money[i].starting + multiply;
        totalCost += sum;
    }
    return totalCost;
}

const totalInvestment = [
 {fullName:'sihab', experience: 5,starting: 20000,increment: 5000 },
 {fullName:'rakib', experience: 4,starting: 20000,increment: 3000 },
 {fullName:'nahid', experience: 2,starting: 20000,increment: 4000 },
 {fullName:'labib', experience: 3,starting: 20000,increment: 2500 },
 {fullName:'sohal', experience: 0,starting: 20000,increment: 3500 }
];
console.log(ncsInvestment(totalInvestment));
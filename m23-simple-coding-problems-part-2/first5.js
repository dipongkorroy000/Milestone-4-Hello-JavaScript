//type-1---
// function getShoppingTotal(products){
//     let div = 0;
//     for(const product of products){
//         div += product.price;
//     }
//     return(div);
// }

// const product = [
//     {name: 'pant',price: 800},
//     {name: 'shirt',price: 500},
//     {name: 'trouser',price: 400},
//     {name: 'shoes',price: 600}
// ];
// console.log(getShoppingTotal(product));

// type-2--->
function cartTotal(products){
    let totalMoney = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        totalMoney += thisProductCost;
    }
    return totalMoney;
}

const product = [
    {name: 'pant',price: 100, quantity: 3},
    {name: 'shirt',price: 300, quantity: 2},
    {name: 'trouser',price: 700, quantity: 5},
    {name: 'shoes',price: 1200, quantity: 1}
];

console.log(cartTotal(product));
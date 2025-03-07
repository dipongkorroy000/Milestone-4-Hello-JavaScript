// function multiply(n1,n2){
//     if(n1 !== 'number' || n2 !== 'number'){
//         return 'Please provide a number';
//     }
//     return n1 * n2;
// }

// console.log(multiply(50,'eight'));

// type-2--->
// function fullName(n1,n2){
//     if(typeof n1 !== 'string'){
//         return 'first name should be a string';
//     }
//     else if(typeof n2 !== 'string'){
//         return 'second name should be a string';
//     }
//     return n1 + ' ' + n2;
// }

// console.log(fullName(4,'eight'));

// type-3-->
function getPrice(product){
    if(typeof product !== 'object'){
        return 'please provide an object';
    }
    return product.price;
}

// console.log(getPrice({name: 'Grocery store',price: 35,color: 'blue'}));
// console.log(getPrice(5));

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'please provide an array';
    }
    console.log(typeof numbers);
}

console.log(getSecond(45));
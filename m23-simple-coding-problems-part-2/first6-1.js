/**
 * first100---> 100
 * 101to200---> 90
 * above200---> 70
 */

function stepByDiscount(quantity){
    const first100Pice = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Pice;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Pice;
        remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        return first100Total + remainingTotal;
    }else{
        const first100Total = 100 * first100Pice;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        return first100Total + second100Total + remainingTotal;
    }
}

console.log(stepByDiscount(150));
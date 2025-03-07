function summation(n1,n2){
    return n1 + n2;
}
function subtract(n1,n2){
    return n1 - n2;
}
function multiply(n1,n2){
    return n1 * n2;
}
function divide(dividend,divisor){
    
}

function calculator(a,b,operation){
    if(operation === 'add'){
        return summation(a,b);
    }
    else if(operation === 'subtract'){
        return subtract(a,b);
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if(operation === 'divide'){
        return quotient = a / b;
    }
    else{
        return "Only 'add','subtract','multiply','divide'operation is allowed."
    }
}

console.log(calculator(10,3,'divide'));
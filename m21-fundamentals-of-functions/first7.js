function evenSizeString(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }return false;
}
function doubleOrTriple(number,doDouble){
    if(doDouble){
        return  number * 2;
    }
    else{
        return number * 3;
    }
}
function numberOfElements(number){
    return number.length;
}

console.log(evenSizeString('Dhaka'));
console.log(doubleOrTriple(5,false));
console.log(numberOfElements([25,64,61,3,49,8,4]));
console.log(numberOfElements('dipongkorroy'));

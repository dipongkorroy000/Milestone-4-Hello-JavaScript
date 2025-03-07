function getMax(numbers){
    let div = numbers[0];
    for(const num of numbers){
        if(num > div){
            div = num;
        }
    }
    return div;
}
function getMin(numbers){
    let div = numbers[0];
    for(const num of numbers){
        if(num < div){
            div = num;
        }
    }
    return div;
}

const height = [65,32,14,72,52,25,41,24,79,63,27,9,21];
console.log('max value is',getMax(height));
console.log('min value is',getMin(height));

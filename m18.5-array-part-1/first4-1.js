let friends = ['kalam', 'salam', 'aklam'];
console.log(friends);

// add element from first --->
friends.unshift('raju');
console.log(friends);

// add element from last --->
friends.push('rahim');
console.log(friends);

// first element out the array --->
friends.shift();
console.log(friends);

// last element out the array --->
let out1 = friends.pop();
console.log(friends);

//combining arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = array1.concat(array2);

console.log(combinedArray)

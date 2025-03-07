/**
 * looping technique
 * 1. for loop
 * 2. while loop 
 * 3. do while ---->ignore
 * 4. for of ---> array loop to use
 * 5. for in ----> object loop to use
 */
// logic-1---
// const friends = ['Elon','Bill','Mark','Waren'];
// for(const friend of friends){
//     // console.log(friend);
// }
// for(let i = 0; i < friends.length; i++){
//     console.log(i);
//     console.log(friends[i]); 
// }
// alternative
// const friends = ['Elon','Bill','Mark','Waren'];
// let i = 0;
// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }

// logic-2---
// const numbers = [5,29,93,83,43,56,54,35];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// alternative
const numbers = [5,29,93,83,43,56,54,35];
let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}
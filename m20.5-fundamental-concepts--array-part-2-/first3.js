//sort --->

//showing the first character --->
// const person = ['rakib','sakib','hena','fatik'];
// console.log(person.sort());

/** const numbers = [6,2,3,5,4,7,1];
 * ascending ---> smaller to larger:[1,2,3,4,5,6,7]
 * descending ---> larger to smaller:[7,6,5,4,3,2,1]
 */
// const numbers = [6,2,3,5,4,7,1];
// console.log(numbers.sort());

const numbers = [4,7,12,65,35];
// console.log(numbers.sort()); not working properly for this ---.
console.log(numbers.sort(function (a,b) {return a - b}));
console.log(numbers.sort(function (a,b) {return b - a}));
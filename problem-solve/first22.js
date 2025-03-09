// type-1-->
// Write a function to convert temperature from Celsius to Fahrenheit.?
// function celsiusToFahrenheit(celsius){
//     return ((9 * celsius) / 5) + 32;
// }
// console.log(celsiusToFahrenheit(44));

//type-2-->
// You are given an array of numbers. Count how many times the a number is repeated in the array.?
// function findArrayNum(find,arrayNumbers){
//     let div = [];
//     for(const s of arrayNumbers){
//         if(find === s){
//             div.push(s);
//         }
//     }
//     return div.length;
// }
// let array = [5,6,11,12,98,5];
// console.log(findArrayNum(5,array));

// type-3-->
// Write a function to count the number of vowels in a string.?
// function vowelsNum(word){
//     let div = [];
//     for(const s of word){
//         if(s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'){
//             div.push(s);
//         }
//     }
//     return div.length;
// }
// console.log(vowelsNum('dipongkorroy'));

// type-3.2-->
//Does a word have all the vowels?
// const word = "a e i o u";
// const vowels = ["a", "e", "i", "o", "u"];
// let isAllVowelsPresent = true;

// for (let s of vowels) {
//   if (word.toLowerCase().includes(s) == false) {
//     isAllVowelsPresent = false;
//     break;
//   }
// }

// console.log(isAllVowelsPresent ? "ALL OK" : "NOT OK");

//type-4--->
// Write a function to find the longest word in a given string.?
// function largeWord(sentence){
//     let array = sentence.split(' ');
//     let div = array[0];
//     for(let w of array){
//         if(array[0].length < w.length){
//             divStringLength = w.length;
//             div = w;
//         }
//     }
//     return div;
// }
// console.log(largeWord('I am learning programming to become a programmer'));

// type-5-->
console.log(Math.round(Math.random()*11 + 10));




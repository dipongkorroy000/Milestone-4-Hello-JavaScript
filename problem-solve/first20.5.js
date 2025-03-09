//type-1--->
// const colors = ['red','blue','green','yellow','orange'];
// console.log(colors.reverse());

// function reverseItem(colorItem){
//     div = [];
//     for(const item of colorItem){
//         div.unshift(item);
//     }
//     return div;
// }

//alternative---
// function reverseColorItem(color){
//     let div = [];
//     for(i = 0;i < color.length;i++){
//     div.unshift(color[i]);
//     }
//     return div;
// }

//alternative---
// function reverseItems(colorItem){
//     let div = [];
//     let d = 0;
//     while(d < colorItem.length){
//         div.unshift(colorItem[d]);
//         d++;
//     }
//     return div;
// }

// console.log(reverseColorItem(colors));

// type-2--->
// const numbers = [12,98,5,41,23,78,45];
// console.log(numbers.filter(num => num % 2 === 0));

//alternative--->
// let div = [];
// for(const d of numbers){
//     if(d % 2 === 0){
//         div.push(d);
//     }
// }
// console.log(div);

//alternative---
// let div = [];
// for(i = 0; i <= numbers.length;i++){
//     if(numbers[i] % 2 === 0){
//         div.push(numbers[i]);
//     }
// } 
// console.log(div);

//alternative---
// let div = [];
// let i = 0;
// while(i < numbers.length){
//     if(numbers[i] % 2 === 0){
//         div.push(numbers[i]);
//     }
//     i++;
// }
// console.log(div);

// type--3--
// let someType = ['NCS','music','Player'];
// let div = "";
// for(const s of someType){
//     div += s;
// }
// console.log(div);

// type-4---
let statement = 'I am a hard working person.';
// let div = '';
// for(const s of statement){
//     div = s + div;
// }
// console.log(div);

//alternative---
// let div = '';
// for(i = 0;i < statement.length;i++){
//     div = statement[i] + div;
// }
// console.log(div);

// alternative--
console.log(statement.split('').reverse().join(''));

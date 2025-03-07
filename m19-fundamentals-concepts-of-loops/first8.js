// almost use hoy na ---

// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// let n= 10;
// do{
//     console.log(n);
//     n++;
// }
// while(n < 5)

let array = [1, 2, 3, 4, 5, 6, 7]
for(let i = 1; i < array.length; i++){
    if(i == 5){
        continue;
    }
    console.log(array[i]);
}

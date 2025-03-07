//continue --> skip rest of the code fot this iteration
//break --> i am done this loop. loop end.

// for(let b = 1; b < 10; b++){
//     if(b % 2 === 1){
//         continue;
//     }
//     console.log(b);
// }

let n = 0;
while(n < 15){
    n++;
    if(n % 5 === 1){
        continue;
    }
    console.log(n);
    
}
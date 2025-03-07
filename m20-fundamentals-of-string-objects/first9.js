const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '32mp',
    isNew: true
}
//for of : array
//for in : object
// for(let d in mobile){
//     console.log(d);
//     console.log(mobile[d]);
// }

console.log(Object.keys(mobile));
//or alternative rule
const allKey = Object.keys(mobile);
for(const key of allKey){
    // console.log(key);
    console.log(key,':', mobile[key]);
}
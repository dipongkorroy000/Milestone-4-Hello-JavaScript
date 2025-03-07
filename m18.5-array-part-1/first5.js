//locking for someone --->
const friends = ['raju', 'saju', 'jadu', 'modu']
console.log(friends.includes('jadu'));
console.log(friends.includes("rahim"))

//locking for someone, after party--->
const friends1 = ['raju', 'saju', 'jadu', 'modu']
// if(friends1.includes('modu')){
//     console.log('party');
// }
// else{
//     console.log('no party');
// }

//locking for someone position or indexof --->
const friends2 = ['raju', 'saju', 'jadu', 'modu']
console.log(friends2.indexOf('saju'));
// -1 if there is nothing --->
console.log(friends2.indexOf('rahim'));

let fullName = [];
let foodName = 25;
// array test --->
console.log(Array.isArray(friends));
console.log(Array.isArray(fullName));
console.log(Array.isArray(foodName));

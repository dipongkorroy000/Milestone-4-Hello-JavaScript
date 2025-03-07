// ---slice---
// const address = 'dinajpur';
// const part = address.slice(2,5);
// console.log(part);

//---split---
// const sentence = 'i am a good and hardworking person.';
// console.log(sentence.split()); // full sentence array
// console.log(sentence.split('')); //full sentence each word specific array declaration
// console.log(sentence.split(' ')); //space divide
// console.log(sentence.split('a')); //specific word divide

//---split---
// const friendsStr = 'Rahim,Karim,Jadu,Modu,Salim,Salma';
// const friends = friendsStr.split(',');
// console.log(friends);

//---join---
// const realFriend = [ 'Rahim', 'Karim', 'Jadu', 'Modu', 'Salim', 'Salma' ]
// console.log(realFriend.join());
// console.log(realFriend.join('|'));
// console.log(realFriend.join('-'));

//---concat---
const first = 'abid';
const last = 'nabid';
// const fullName = first + last;
// const fullName = first + ' ' + last;
// console.log(fullName);
//alternative---
// const fullName2 = first.concat(last);
// const fullName2 = first.concat(' ').concat(last);
// console.log(fullName2);
//---includes---
console.log(last.includes('d')); // finding the specific word
console.log(last.includes('x')); // finding the specific word

const pen = {
    brand: 'econo',
    price: 10,
    color: 'black'
}
// let person = new Object(pen);
// person.fullName = 'dipongkor';
// console.log(person);

let member = Object.create(pen);
member.product = 'still';
console.log(member);

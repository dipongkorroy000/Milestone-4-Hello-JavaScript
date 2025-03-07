const sentence = 'I am learning Web Dev.'
// const result = '.veD beW gninrael ma I'

let div = '';
for(const s of sentence){
    div = s + div;
}
console.log(div);

//alternative ----
// let div = '';
// for(let i = 0; i < sentence.length; i++){
//     div = sentence[i] + div;
// }
// console.log(div);

//alternative shortcut----
// let reversed = sentence.split('').reverse().join('');
// console.log(reversed);

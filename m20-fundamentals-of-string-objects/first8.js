// type-1---
// let computer = {
//     brand: 'lenovo',
//     price: 35000,
//     processor: 'ryzen',
//     ssd: '412gb'
// }
// console.log(Object.keys(computer));
// console.log(Object.values(computer));

// type-2---
const college = {
    name: 'HLC',
    class: ['11','12'],
    events: ['science fair','bijoy dibos','21 feb'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college.name);
// console.log(college.unique);
// console.log(college.unique.color);

//update merit ---
college.unique.result.merit = 'top top top';
// console.log(college.unique.result.merit);
//or alternative rule
// console.log(college['unique'].result.merit);

//update event---1 index
college.events[1] = 'pohela baishak';
// console.log(college.events[1]);

//delete class property
delete college.class;

console.log(college);
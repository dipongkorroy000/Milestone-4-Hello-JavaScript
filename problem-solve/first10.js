//type-1-->
// let burger = 500;
// let burger1 = true;
// if(burger >=500){
//     console.log("free coke");
// }
// else{
//     let coke = 30;
//     console.log('payment =', coke);
// }

//type-2-->
// let weight = 50;
// let height = 1.7;
// let heightSquare = Math.pow(height, 2);
// let BMI = weight / heightSquare;
// if(BMI <= 18.5 ){
//     console.log("you are underweight, Your BMI =", BMI.toFixed(3));
// }
// else if(BMI <= 24.9){
//     console.log('you are normal, Your BMI =', BMI.toFixed(3));
// }
// else if(BMI <= 29.9){
//     console.log('you are overweight, Your BMI =', BMI.toFixed(3));
// }
// else{
//     console.log(BMI.toFixed(3));
// }

//type-3-->
// let score = 75;
// if(score >= 90 && score <=100){
//     let grade = 'A';
//     console.log('your grade =', grade);
// }
// else if(score >= 80 && score <= 89){
//     let grade = 'B';
//     console.log('your grade =', grade);
// }
// else if(score >=70 && score <=79){
//     let grade = 'C';
//     console.log('your grade =', grade);
// }
// else if(score >=60 && score <=69){
//     let grade = 'D';
//     console.log('your grade =', grade);
// }
// else{
//     let grade = 'F';
//     console.log('your grade =', grade);
// }
//alternative rule --
// let score = 70;
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A++";
// }
// else if(score >= 80 && score <= 89){
//     grade = "A+";
// }
// else if(score >= 70 && score <= 79){
//     grade = "A";
// }
// else if(score >= 60 && score <= 69){
//     grade = "B";
// }
// else if(score >= 50 && score <= 59){
//     grade = "C";
// }
// else if(score >= 40 && score <= 49){
//     grade = "D";
// }
// else if(score >= 33 && score <= 39){
//     grade = "E";
// }
// else if(score <= 32){
//     grade = "F";
// }
// console.log("according to your score, your grade was :", grade);

//type-4-->
// let myMark =80;
// let friendMark = 30;
// if(myMark >= 80){
//     if(friendMark >=80){
//         console.log('go for a lunch');
//     }else if(friendMark < 80 && friendMark >= 60){
//         console.log('good luck');
//     }else if(friendMark < 60 && friendMark >= 40){
//         console.log('message unseen');
//     }else{
//         console.log('block');
//     }
// }
// else{
//     console.log('come to home');
// }

//type-5-->
// let num1 = 65;
// let num2 = 45;
// let result;
// if(num1 > num2){
//     result = num1 * 2;
// }else{
//     result = num1 + num2;
// }
// console.log(result);

//type-6-->
// let money = 800;
// let age = 60;
// let student = false;
// let discountPrice;
// if(age <= 10){
//     money = 0;
// }else if(student == true){
//     discountPrice = money * 50 / 100;
// }else if(age >= 60){
//     discountPrice = money - money * 15 / 100;
// }else{
//     console.log('your bill', money);
// }
// console.log('just for you', discountPrice || money);

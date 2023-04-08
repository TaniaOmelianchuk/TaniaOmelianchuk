"use strict";


const age = prompt("Вкажіть Ваш вік");
switch (true) {
    case isNaN(age) || age <=0:
        alert("Введіть коректне значення");
        break;
    case age >= 0 && age <= 11:
        alert("Ви - дитина!");
        break;
    case age >= 12 && age <= 18:
        alert("Ви - підліток!");
        break;
    case age >= 18 && age <= 59:
        alert("Ви - доросла людина!");
        break;
    case age >= 60:
        alert("Ви - пенсіонер!");
        break;
}



// const num = prompt("Вкажіть число від 0 до 9");
// switch (num) {
//     case "0":
//         alert("Спецсимвол: )");
//         break;
//     case "1":
//         alert("Спецсимвол: !");
//         break;
//     case "2":
//         alert("Спецсимвол: @");
//         break;
//     case "3":
//         alert("Спецсимвол: #");
//         break;
//     case "4":
//         alert("Спецсимвол: $");
//         break;
//     case "5":
//         alert("Спецсимвол: %");
//         break;
//     case "6":
//         alert("Спецсимвол: ^");
//         break;
//     case "7":
//         alert("Спецсимвол: &");
//         break;
//     case "8":
//         alert("Спецсимвол: *");
//         break;
//     case "9":
//         alert("Спецсимвол: (");
//         break;  
// }



// let start = prompt("Вкажіть початкове значення діапазону");
// let end = prompt("Вкажіть кінцеве значення діапазону");
// let sum = 0;

// if (start > end) {
//     alert("Початкове значення не може бути більшим за кінцеве")
// } else {
// for (let i = start; i <= end;) {
//     sum += i++;
// }
// alert("Сума всіх чисел в діапазоні від " + start +  " до " + end + ": " + sum);
// };



// alert(`Давайте знайдемо найбільший спільний дільник!`)
// let firstNum = +prompt(`Вкажіть перше число`);
// let secondNum = +prompt(`Вкажіть друге число`);

// while (firstNum !=0 && secondNum !=0) {
//     if (firstNum > secondNum) {
//         firstNum = firstNum % secondNum;
//     }
//     else {
//         secondNum = secondNum % firstNum;
//     }
// }

// alert(firstNum+secondNum);



// const number = +prompt("Введіть число:");

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     alert(i);
//   }
// };
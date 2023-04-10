"use strict";

// function testFun(список параметрів) {
//     тіло функції
// }

// const testFunction = function(список параметрів) {
//     тіло функції
// } 

// const fun = (спичок параметрів) => тіло функції;


// function number() {
//     console.log(arguments.length);
// }

// number(1, 2, 3, 4)



const firstNum = +prompt('Вкажіть перше число')
const secondNum = +prompt('Вкажіть друге число')

function comparison(firstNum, secondNum) {
    if(firstNum < secondNum){
        return('-1');
    } else if (firstNum > secondNum) {
        return('1');
    } else {
        return('0')
    }
}
alert(comparison(firstNum, secondNum));



// function factorial() {
//   let num = +prompt('Введіть число');
//   let result = 1;

//   for (let i = 1; i <= num; i++) {
//      result *= i;
//   }
//   return result;
// }

// alert( factorial());



// const firstNum = prompt('Введіть перше число');
// const secondNum = prompt('Введіть друге число');
// const thirdNum = prompt('Введіть третє число');

// function addingNum(firstNum, secondNum, thirdNum) {
//   return firstNum + secondNum + thirdNum;
// }

// alert(addingNum(firstNum, secondNum, thirdNum));



// const length = +prompt('Введіть довжину прямокутника');
// const width = +prompt('Введіть ширину прямокутника');

// function area() {
//   if (length && width) {
//     return length * width;
//   } else if (length) {
//     return length * length;
//   } else {
//     return width * width;
//   } 
// };

// const result = area();

// alert(`Площа геометричної фігури: ${result}`);


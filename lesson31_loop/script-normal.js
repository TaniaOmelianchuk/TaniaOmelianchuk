"use strict";

// const num = prompt('Введіть п\'ятирозрядне число');

// if (num.length !==5) {
//     alert('Це не п\'ятирозрядне число!');
// } else if (num === num.split("").reverse().join("")) {
//     alert('Це число - паліндром!');
// } else {
//     alert('Це число - не паліндром :(');
// }


// const sum = +prompt("Введіть суму покупки");
// let discount;

// if(sum => 200 && sum <= 299) {
//      discount = sum * (1 - 0.03);
// }
//  else if (sum >= 300 && sum <= 499) {
//    discount = sum * (1 - 0.05);
// } else (sum >= 500); {
//     discount = sum * (1 - 0.07);  
// }
// alert(`Сума зі знижкою: ` + Math.round(discount));


// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= 10; i++) {
//     let num = +prompt(`Введіть ${i}-е число`);

//     if (num > 0) {
//         positive++;
//     } else if (num < 0) {
//         negative++;
//     } else if (num === 0) {
//         zero++;
//     } 

//     if (num % 2 === 0 && num !== 0) {
//         even++;
//     } else if (num % 2 !== 0) {
//         odd++;
//     }      
// }

// alert(`Кількість додатніх чисел: ${positive}
// Кількість від'ємних чисел: ${negative}
// Кількість нулів: ${zero}
// Кількість парних чисел: ${even}
// Кількість непарних чисел: ${odd}`);


// let currentDay = "Понеділок";

// while(confirm(`День тижня - ${currentDay}. Хочеш побачити наступний день?`)) {
//     switch (currentDay) {
//         case "Понеділок" :
//             currentDay = "Вівторок";
//             continue;
//         case "Вівторок" :
//             currentDay = "Середа";
//             continue;
//         case "Середа" :
//             currentDay = "Четвер";
//             continue;
//         case "Четвер" :
//             currentDay = "П'ятниця";
//             continue;
//         case "П'ятниця" :
//             currentDay = "Субота";
//             continue;
//         case "Субота" :
//             currentDay = "Неділя";
//             continue;
//         case "Неділя" :
//             currentDay = "Понеділок";
//             continue;
//     }
// }


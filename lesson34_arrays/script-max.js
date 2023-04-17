const shoppingList = [{
    name: "Хліб",
    quantity: 2,
    bought: true,
    price: 20,
    sum: 0
}, {
    name: "Молоко",
    quantity: 1,
    bought: false,
    price: 25,
    sum: 0
}, {
    name: "Апельсини",
    quantity: 5,
    bought: true,
    price: 7,
    sum: 0
}, {
    name: "Соняшникова олія",
    quantity: 1,
    bought: true,
    price: 50,
    sum: 0
}, {
    name: "Шоколадка",
    quantity: 3,
    bought: false,
    price: 30,
    sum: 0
}
]
console.log(shoppingList);

//1 
let totalSum = 0;
for(let i = 0; i < shoppingList.length; i++)
totalSum += shoppingList[i].quantity * shoppingList[i].price;

alert(`Повна сума: ${totalSum} грн.`);

//2 
let boughtSum = 0;
let unboughtSum = 0;

for(let i = 0; i < shoppingList.length; i++) {
if(shoppingList[i].bought) {
    boughtSum += shoppingList[i].quantity * shoppingList[i].price;
} else {
    unboughtSum += shoppingList[i].quantity * shoppingList[i].price;
}
}

alert(`Сума придбаних товарів: ${boughtSum} грн, непридбаних: ${unboughtSum} грн.`)

//3
shoppingList.forEach (item => {
    item.sum = item.quantity * item.price;
})

const sortedList = shoppingList.sort((a, b) => a.sum - b.sum);

console.log(sortedList);

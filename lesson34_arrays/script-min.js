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
const sortedList = shoppingList.sort((a, b) => a.bought - b.bought)

sortedList.forEach(item => {
    const purchased = item.bought ? `куплено` : `не куплено`;
    alert(`${item.name}: Кількість: ${item.quantity} шт. Ціна: ${item.price} грн. Статус: ${purchased}`);
})

//2
const productItem = prompt(`Вкажіть, що ви купили`);
const boughtItem = shoppingList.find(item => item.name === productItem);
    
if (boughtItem) {
    boughtItem.bought = true;
    const purchased = boughtItem.bought ? `куплено` : `не куплено`;
    alert(`${productItem} ${purchased}!`);
} else {
    alert(`Продукт "${productItem}" не знайдено в списку покупок`);
}

console.log(shoppingList);


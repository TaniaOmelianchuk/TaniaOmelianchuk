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
let itemToDelete = prompt('Вкажіть назву продукту, який Ви бажаєте видалити');
let updatedShoppingList = shoppingList.filter(item => item.name !== itemToDelete);
console.log(updatedShoppingList);

//2
let newItemName = prompt("Введіть назву продукту:");
let newItemQuantity = +prompt("Введіть кількість:");
let newItemPrice = +prompt("Введіть ціну:");

let existingItem = updatedShoppingList.find(item => item.name === newItemName);

if(existingItem) {
    existingItem.quantity += newItemQuantity;
} else {
    let newItem = {
        name: newItemName,
        quantity: newItemQuantity,
        bought: false,
        price: newItemPrice,
        sum: 0
    }
    updatedShoppingList.push(newItem);
}

console.log(updatedShoppingList);

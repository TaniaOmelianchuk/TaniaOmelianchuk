const car = {
    brand: "Dodge",
    model: "Journey",
    year: 2018,
    averageSpeed: 100,
    fuelTank: 80,
    fuelConsumption: 10,
    drivers: ['John', 'Mark']
}

// 1
for(let key in car) {
    console.log(car[key]);
}

//2
const newName = prompt('Введіть ім\'я нового водія')

function addDriver(newName) {
    if(newName) {
        car.drivers.push(newName);
        alert(`Ім'я ${newName} додано до списку!`);
    } else {
        alert(`Ви не ввели ім'я`);
    }
}

addDriver(newName);

console.log(car.drivers);

//3
function checkExactDriver(name) {
    return car.drivers.includes(name);
}

const driverName = prompt('Введіть ім\'я водія, якого хочете знайти');

if(checkExactDriver(driverName)) {
    alert('Є водій з таким ім\'ям!');
} else {
    alert('Немає водія з таким ім\'ям');
}

//4
const distance = +prompt('Вкажіть відстань яку потрібно подолати у км')

let time = distance / car.averageSpeed;

let restTime = Math.floor(time / 4);
time += restTime;

let fuel = Math.round((distance / 100) * car.fuelConsumption);


alert(`Подорож на відстань ${distance} км займе ${time} годин. Водіям потрібно зробити ${restTime} перерв. Для подолання такої відстані потрібно ${fuel} л пального.`);
class Circle {
    constructor(radius) {
        this.circleRadius = radius;
    }
    get radius() {
        return this.circleRadius;
    }

    set radius(value) {
        return this.circleRadius = value;
    }

    get diameter() {
        return this.circleRadius * 2;
    }

    area() {
        return Math.round(Math.PI * this.circleRadius ** 2);
    }

    length() {
        return  Math.round(2 * Math.PI * this.circleRadius);
    }
}

const number = new Circle(10);
console.log(`Радіус кола: ${number.radius} см`);
console.log(`Діаметр кола: ${number.diameter} см`);
console.log(`Площа кола: ${number.area()} см^2`);
console.log(`Довжина кола: ${number.length()} см`);




class Marker {
    constructor(color, ink){
    this.color = color;
    this.ink = ink;
    }

    writeText(text, parent = document.body) {
        const p = document.createElement('p');
        p.innerText = text;
        p.style.color = this.color;

        for(let i = 0; i < text.length; i++) {
            if(this.ink > 0) {
                parent.append(p);
                this.ink -= 0.5;
            } else {
                break;
            }
        }
    }
}

class RefillableMarker extends Marker {
    constructor(color, ink, capacity) {
        super(color, ink);
        this.capacity = capacity;
    }
    
    refill() {
        this.ink = this.capacity;
    }
}
    
    const marker = new Marker("red", 50);
    marker.writeText("Hello world");
    console.log(`Рівень чорнил - ${marker.ink}`)
    
    const refillableMarker = new RefillableMarker("green", 50, 100);
    refillableMarker.writeText("Це - маркер, який можна перезаправляти");
    console.log(`Рівень чорнил - ${refillableMarker.ink}`);

    refillableMarker.refill();
    refillableMarker.writeText("Після перезаправки, маркер можна далі використовувати");
    console.log(`Рівень чорнил - ${refillableMarker.ink}`);




    class Employee {
        constructor(name, position, salary, age) {
            this.name = name;
            this.position = position;
            this.salary = salary;
            this.age = age;
        }
        getName() {
            return this.name;
        }

        getPosition() {
            return this.position;
        }
        
        getSalary() {
            return this.salary
        }

        getAge() {
            return this.age;
        }
        }
    
    class EmpTable {
        constructor(employees) {
            this.employees = employees;
        }
        
        getHtml() {
            let html = "<table><tr><th>Ім'я</th><th>Посада</th><th>Зарплатня</th><th>Вік</th></tr>";
            for (let employee of this.employees) {
                html += "<tr>";
                html += "<td>" + employee.getName() + "</td>";
                html += "<td>" + employee.getPosition() + "</td>";
                html += "<td>" + employee.getSalary() + "</td>";
                html += "<td>" + employee.getAge() + "</td>";
                html += "</tr>";
            }
            html += "</table>";
            return html;
        }
    }
        
        const employees = [
            new Employee("Іван", "Художник", 15000, 35),
            new Employee("Марина", "Медичний працівник", 20000, 28),
            new Employee("Олена", "Швея", 25000, 24),
            new Employee("Вадим", "Механік", 17000, 31)
        ];
        
        const empTable = new EmpTable(employees);
        const tableHtml = empTable.getHtml();
        const table = document.createElement('div');
        table.innerHTML = tableHtml;
        document.body.appendChild(table);
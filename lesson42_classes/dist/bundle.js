(()=>{const t=new class{constructor(t){this.circleRadius=t}get radius(){return this.circleRadius}set radius(t){return this.circleRadius=t}get diameter(){return 2*this.circleRadius}area(){return Math.round(Math.PI*this.circleRadius**2)}length(){return Math.round(2*Math.PI*this.circleRadius)}}(10);console.log(`Радіус кола: ${t.radius} см`),console.log(`Діаметр кола: ${t.diameter} см`),console.log(`Площа кола: ${t.area()} см^2`),console.log(`Довжина кола: ${t.length()} см`);class e{constructor(t,e){this.color=t,this.ink=e}writeText(t,e=document.body){const r=document.createElement("p");r.innerText=t,r.style.color=this.color;for(let s=0;s<t.length&&this.ink>0;s++)e.append(r),this.ink-=.5}}new e("red",50).writeText("Hello world");const r=new class extends e{constructor(t,e,r){super(t,e),this.capacity=r}refill(){this.ink=this.capacity}}("blue",50,100);r.writeText("This is a refillable marker."),r.refill(),r.writeText("After refilling, this marker can continue to be used.");class s{constructor(t,e,r,s){this.name=t,this.position=e,this.salary=r,this.age=s}getName(){return this.name}getPosition(){return this.position}getSalary(){return this.salary}getAge(){return this.age}}const i=[new s("Іван","Художник",15e3,35),new s("Марина","Медичний працівник",2e4,28),new s("Олена","Швея",25e3,24)],n=new class{constructor(t){this.employees=t}getHtml(){let t="<table>";t+="<tr><th>Ім'я</th><th>Посада</th><th>Зарплатня</th><th>Вік</th></tr>";for(let e of this.employees)t+="<tr>",t+="<td>"+e.getName()+"</td>",t+="<td>"+e.getPosition()+"</td>",t+="<td>"+e.getSalary()+"</td>",t+="<td>"+e.getAge()+"</td>",t+="</tr>";return t+="</table>",t}}(i);document.write(n.getHtml())})();
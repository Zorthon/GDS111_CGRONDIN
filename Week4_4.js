let fName = "Larry"; //variables are case sensitive
let age = 22;
let salary = 40000.00;
let employed = true;

console.log(fName + " is " + age + " years old.");
console.log("He is making " + salary + " annually");
console.log(typeof fName);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof employed);

fName = 77;
console.log("FName = " + fName);
console.log(typeof fName);

const player = ["Mario", "Luigi", "Pikachu", "Peach"];

for(let a of player) { //for/of loop
    console.log(a)
}
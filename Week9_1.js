let start = Number(prompt("Type start number: "));
let end = Number(prompt("Type end number: "));
const arr = []

for(i=start; i<end; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for(i=start; i<end; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        arr.push(String("Fizz Buzz"));
    } else if (i % 3 == 0) {
        arr.push(String("Fizz"));
    } else if (i % 5 == 0) {
        arr.push(String("Buzz"));
    } else {
        arr.push(String(i));
    }
}

console.log(arr);
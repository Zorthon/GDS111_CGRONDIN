const playerArr =  ["Mario", "Luigi", "Peach"];
const pwdArr = ["diamond", "emerald", "gold"];

let playerID = prompt("Enter player ID: ");
let password = prompt("Type password: ");

let validUser = false;
for(let i=0; i<playerArr.length; i++) {
    if (playerID == playerArr[i] && password == pwdArr[i]) {
        validUser = true;
    }
}

if (validUser == true){
    console.log("Welcome to the game!");
} else {
    console.log("Get away hacker...");
}
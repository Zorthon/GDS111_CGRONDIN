const playerArr =  ["Mario", "Luigi", "Peach"]; //IDs
const pwdArr = ["diamond", "emerald", "gold"]; //passwords

let playerID = prompt("Enter player ID: ");
let password = prompt("Type password: ");

let validUser = false; // a boolean
for(let i=0; i<playerArr.length; i++) { //note .length
    if (playerID == playerArr[i] && password == pwdArr[i]) {
        validUser = true; //flip the boolean
    }
}

if (validUser == true){
    console.log("Welcome to the game!");
} else {
    console.log("Get away hacker...");
}
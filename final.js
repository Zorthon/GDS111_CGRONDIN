let startGuessingBtnObj = document.getElementById("Start Guessing");

startGuessingBtnObj.addEventListener("click", mainScript);

function mainScript(){
    secret = randomNumber(1, 100)

    numberGuesses = 0

    while(numberGuesses<5){
        console.log("Guess the Number")
        player = Number(prompt("Guess a Number between 1 and 100"))
        
        numberGuesses+=1

        if(isNaN(player)){
            console.log("Invalid Input")
            numberGuesses = 0
        }else if(player < 1){
            console.log("Invalid Input")
        }else if(player > 100){
            console.log("Invalid Input")
        }

        if(player == secret){
            if(numberGuesses == 1){
               console.log("Hooray! You guessed the number in " + String(numberGuesses) + " attempt") 
               numberGuesses = 5
            }else{
                console.log("Hooray! You guessed the number in " + String(numberGuesses) + " attempts")
                numberGuesses = 5
            }
            
        }else if(numberGuesses == 5){
            console.log("Sorry you lost")
        }else if(player < secret){
            console.log(String(player) + " is lower - Try again")
            console.log("")
        }else if(player > secret){
            console.log(String(player) + " is higher - Try again")
            console.log("")
        }
    }
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }
}
function rockpaperscissors(){
    i=0
    computerScore = 0
    playerScore = 0
    while(i<3){
        console.log("1 = Rock, 2 = Paper, 3 = Scissors");
        player = Number(prompt("Input a number: "));
        computer = Math.floor(Math.random() * (3-1+1)) + 1;

        if(player == 1 && computer == 2 || player == 2 && computer == 3 || player == 3 && computer == 1) {
            console.log("Computer wins");
            computerScore++;
        }
        
        if(player == 2 && computer == 1 || player == 3 && computer == 2 || player == 1 && computer == 3) {
            console.log("You win");
            playerScore++;
        }
        if(player == 1 && computer == 1 || player == 2 && computer == 2 || player == 3 && computer == 3){
            console.log("You and the computer tie");
            playerScore++;
            computerScore++;
        }
        i++;
    }
     if(computerScore>playerScore) {
        console.log("Computer wins with a score of " + computerScore + " compared to the your score of " + playerScore);
     } else {
        if(playerScore>computerScore) {
                console.log("You win with a score of " + playerScore + " compared to the computers score of " + computerScore);
            }else{
                if(playerScore==computerScore){
                    console.log("You had a score of " + playerScore + " and the computer had a score of " + computerScore + " it is a tie");
                }
            }
     }
}

rockpaperscissors();

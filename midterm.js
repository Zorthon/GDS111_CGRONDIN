function mainScreen() {
    console.log("1-Load 2-Save 3-Play 4-Help 5-Quit Make Selection");
    user = prompt("Input Number");
    if(isNaN(user)) {
        console.log("Invalid Entry, please input a number.");
        console.log("                                                 ");
        mainScreen();
    }else{
        if((user<=0) || (user>5)) {
            console.log("Invalid Entry, please input a number 1-5");
            console.log("                                                 ");
            mainScreen();
        }else{
            if(user==1){
                console.log("Loading game...");
                console.log("                                                 ");
                mainScreen();
            }else{
                if(user==2){
                    console.log("Saving Status...");
                    console.log("                                                 ");
                    mainScreen();
                }else{
                    if(user==3){
                        console.log("Let's Play!");
                        console.log("                                                 ");
                        mainScreen();
                    }else{
                        if(user==4){
                            console.log("Here's your help");
                            console.log("                                                 ");
                            mainScreen();
                        }else{
                            if(user==5){
                                console.log("Game Over!")
                            }
                        }
                    }
                }
            }
        }
                
        }
    
}

mainScreen()

const menu = ["Main Menu Bar", " ", "1. Change Actions", "2. Button Layout", "3. Keybindings", "4. OnEvent Scripts", "5. Main Menu Bar", "6. Misc Options", 
"7. Unlock Dragging", "8. Show Button IDs", "9. Show Action IDs", "10. COPY", "11. PASTE", "0. Exit Menu"];

i = 0

while(i = true){
    for(let i=0; i<menu.length; i++) {
        console.log(menu[i]);
    }
    playerChoice = Number(prompt("Select a number: "));
    
    if(isNaN(playerChoice)){
        console.log("Invalid entry. Please input a number");
        console.log("");

    }else{
        if((playerChoice<0) || (playerChoice>11)){
            console.log("Invalid entry. Please input a number 0-11");
            console.log("");
        }
            
    }
    if(playerChoice == 1){
        chngAct();
    }
    
    if(playerChoice == 2){
        button();
    }
    
    if(playerChoice == 3){
        keybind();
    }
    
    if(playerChoice == 4){
        eveScript();
    }
    
    if(playerChoice == 5){
        mainMenu();
    }
    
    if(playerChoice == 6){
        misc();
    }
    
    if(playerChoice == 7){
        unDrag();
    }
    
    if(playerChoice == 8){
        showBId();
    }
    
    if(playerChoice == 9){
        showAId();
    }
    
    if(playerChoice == 10){
        copy();
    }
    
    if(playerChoice == 11){
        paste();
    }
    if(playerChoice == 0){
        console.log("");
        console.log("The End!");
        break
    }

}

function chngAct(){
    console.log("");
    console.log("I'm inside Change Actions function.");
    console.log(""); 
}

function button(){
    console.log("");
    console.log("I'm inside Button Layout function.");
    console.log("");
}

function keybind(x){
    console.log("");
    console.log("I'm inside Key Bindings function.");
    console.log("");
}

function eveScript(){
    console.log("");
    console.log("I'm inside On Event Scripts function.");
    console.log("");
}

function mainMenu(){
    console.log("");
    console.log("I'm inside Menu Bar funciton.");
    console.log("");
}

function misc(){
    console.log("");
    console.log("I'm inside Misc Options function");
    console.log("");
}

function unDrag(){
    console.log("");
    console.log("I'm inside Unlock Dragging function");
    console.log("");
}

function showBId(){
    console.log("");
    console.log("I'm inside Show Button IDs.");
    console.log("");   
}

function showAId(x){
    console.log("");
    console.log("I'm inside Show Action IDs.");
    console.log("");   
}

function copy(x){
    console.log("");
    console.log("I'm inside Copy function.");
    console.log("");  
}

function paste(x){
    console.log("");
    console.log("I'm inside Paste function.");
    console.log("");   
}
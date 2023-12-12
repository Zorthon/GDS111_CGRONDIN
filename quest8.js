function mainMenu(){
    total = 0
    credits = 1000
    display = ["-", "-", "-", "-"]
    bet = [
        [0],
        [150],
        [1000],
    ]

    let con = true
    while(con == true){
        console.log("<1> Play")
        console.log("<2> Quit")
        console.log("")
        slotMachine()
        console.log("")
        betDisplay()
    
        let player = Number(prompt("Input a number: "))
    
        if(player == 1){
            spin()
            bets()
            bet[0] = total
            credits-=150
            bet[2] = credits
            if(display[0] == display[1] && display[0] == display[2] && display[0] == display[3]){
                spin()
                console.log("JACK POT !!!!")
                con = false
            }else{
                con = true
            }
            if(credits <= 0){
                console.log("No more credits.")
                con = false
            }
        }else if(player == 2){
            console.log("Goodbye")
            con = false
        }else if(isNaN(player)){
            console.log("Invalid Input")
            console.log("")
            con = true
        }else if(player > 2 || player < 1){
            console.log("Invalid Input")
            console.log("")
            con = true
        }
    }
}

function bets(){
    for(let i=0; i<display.length; i++) {
        if(display[i] == "0"){
            total+=100
        }else if(display[i] == "1"){
            total+=75
        }else if(display[i] == "2"){
            total+=50
        }else if(display[i] == "3"){
            total+=25
        }
    }
}

function betDisplay(){
    console.log("Paid = " + bet[0])
    console.log("Bet = " + bet[1])
    console.log("Credits = " + bet[2])
    console.log("")
}

function spin(){
    display[0] = spinResult(4)
    display[1] = spinResult(4)
    display[2] = spinResult(4)
    display[3] = spinResult(4)
}

function spinResult(max){
    return Math.floor(Math.random() * max)
}

function slotMachine(){
    console.log("["+ display[0]+"]"+ "["+ display[1]+"]"+ "["+ display[2]+"]"+ "["+ display[3]+"]")
}

mainMenu()

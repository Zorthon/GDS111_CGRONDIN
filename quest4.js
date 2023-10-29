function checkAge() {
age = (prompt("Input age: "));

    if(isNaN(age)) {
        console.log("Invalid Input, please input a number");
        checkAge();
    } else {
        if(age<18){
            console.log("You are a minor");
        } else {
            if(age<65){
                console.log("You are neither a senior or minor");
            } else {
                console.log("You are a senior");
            }
        }
    }
}
checkAge();
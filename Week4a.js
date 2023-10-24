var wideScope = 7;
if(wideScope = 7) {
    let localScope = 10;
    console.log("localScope inside if-block = " + localScope);
    console.log("wideScope inside if-block = " + wideScope);
}
/*console.log("localScope outside of if-block = " + localScope);*/
console.log("wideScope outside of if-block = " + wideScope);
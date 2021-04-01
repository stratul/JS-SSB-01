let lower = 2;
let higher = parseInt(prompt("Please enter a valid number."));

if (higher > 2){
    document.write("Prime numbers between 2 and " + higher + " is:<br>");
    
    for ( let i = lower; i <= higher; i++){
        let notPrime = false;
        for ( let j = 2; j <= i; j++){
            if( i % j === 0 && j !== i){
                notPrime = true;
            }
        }
        if (notPrime === false){
            document.write(i + "<br>");
        }
    }
} else {
    document.write("Please enter a valid number.");
}
let num = parseInt(prompt("Please enter a valid natural number"));

let sum = 0;

for ( let i = 1; i <= num; i++){
    sum = sum + i;
}

if(num > 0){
    document.write("Your natural number is: " + num + "<br>");
    document.write("Summation of 1 to " + num + " is " + sum + "<br>");
} else {
    document.write("Please enter a valid natural number");
}
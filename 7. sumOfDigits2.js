let num = parseInt(prompt("Please enter a valid integer number"));
let digits = num.toString().length;
let sum = 0;


if (num > 9) {
    document.write("Your number is: " + num + "<br>");
    document.write("The digits of this number is: " + digits + "<br>");

    let lastDigit = num % 10;

    while (num > 9){
        num = parseInt(num / 10);
    }
    sum = lastDigit + num;
    
    document.write("The sum of digits of this number is: " + sum);
}else {
    document.write("Please enter a valid integer number");
}
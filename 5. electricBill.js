let unit = parseInt(prompt("How much is your electricity unit?"));
let bill = 0;

if (unit >= 0) {
    if (unit <= 50){
        bill = unit * 0.5;
        finalBill = bill + bill * 0.2;
        document.write("Your electricity bill is " + finalBill + " Taka");
    } else if (unit <= 150){
        bill = (50 * 0.5) + (unit - 50) * 0.75;
        finalBill = bill + bill * 0.2;
        document.write("Your electricity bill is " + finalBill + " Taka");
    } else if (unit <= 250){
        bill = (50 * 0.5) + (100 * 0.75) + (unit - 150) * 1.2;
        finalBill = bill + bill * 0.2;
        document.write("Your electricity bill is " + finalBill + " Taka");
    } else {
        bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + (unit - 250) * 1.5;
        finalBill = bill + bill * 0.2;
        document.write("Your electricity bill is " + finalBill + " Taka");
    }
} else {
    document.write("Please enter a valid number");
}
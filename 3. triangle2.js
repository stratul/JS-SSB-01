let side1 = parseInt(prompt("Please input length of side one"));
let side2 = parseInt(prompt("Please input length of side two"));
let side3 = parseInt(prompt("Please input length of side three"));

if (side1 > 0 && side2 > 0 && side3 > 0 ){
    if ( side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2 ){
        document.write("This is a Triangle");
    } else {
        document.write("This is not a Triangle");
    }
} else {
    document.write("Please enter correct number");
}
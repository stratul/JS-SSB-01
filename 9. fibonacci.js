let n1 = 0;
let n2 = 1;
let last = parseInt(prompt("Please enter a valid number."));

if (last > 0){
    document.write(n1 + ",");
    document.write(n2 + ",");
    let j = n1 + n2;

    while ( j <= last){
        document.write(j + ",");

        n1 = n2;
        n2 = j;
        j = n1 + n2;
    }
} else {
    document.write("Please enter a valid number.");
}
let phy = parseInt(prompt("Please input your Physics mark"));
let chem = parseInt(prompt("Please input your Chemistry mark"));
let bio = parseInt(prompt("Please input your Biology mark"));
let math = parseInt(prompt("Please input your Mathematics mark"));
let comp = parseInt(prompt("Please input your Computer mark"));

let totalMarks = phy + chem + bio + math + comp ;
let average = totalMarks / 5 ;


if ( phy >= 0 && chem >= 0 && bio >= 0 && math >= 0 && comp >= 0 && phy <= 100 && chem <= 100 && bio <= 100 && math <= 100 && comp <= 100 ){
    document.write("Your total marks is: " + totalMarks + ".<br>");
    document.write("You have achieved " + average + "% marks.<br>");
    
    if (average >= 90){
        document.write("You have got A Grade");
    } else if (average >= 80){
        document.write("You have got B Grade");
    } else if (average >= 70){
        document.write("You have got C Grade");
    } else if (average >= 60){
        document.write("You have got D Grade");
    } else if (average >= 40){
        document.write("You have got E Grade");
    } else {
        document.write("You have got F Grade");
    }
} else {
    document.write("Please enter correct number");
}
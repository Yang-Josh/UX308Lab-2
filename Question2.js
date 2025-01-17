//Numeric to letter grade

let grade = 98;

//A range
if (grade <= 100 && grade >= 97){
    console.log(`The grade ${grade} is a A+`);
}
else if (grade <= 96 && grade >= 93) {
    console.log(`The grade ${grade} is a A`);   
}
else if (grade <= 92 && grade >= 90) {
    console.log(`The grade ${grade} is a A-`);   
}
//B range
else if (grade <= 89 && grade >= 87) {
    console.log(`The grade ${grade} is a B+`);   
}
else if (grade <= 86 && grade >= 83) {
    console.log(`The grade ${grade} is a B`);   
}
else if (grade <= 82 && grade >= 80) {
    console.log(`The grade ${grade} is a B-`);   
}
//C range
else if (grade <= 79 && grade >= 77) {
    console.log(`The grade ${grade} is a C+`);   
}
else if (grade <= 76 && grade >= 73) {
    console.log(`The grade ${grade} is a C`);   
}
else if (grade <= 72 && grade >= 70) {
    console.log(`The grade ${grade} is a C-`);   
}
//D range
else if (grade <= 69 && grade >= 67) {
    console.log(`The grade ${grade} is a D+`);   
}
else if (grade <= 66 && grade >= 63) {
    console.log(`The grade ${grade} is a D`);   
}
else if (grade <= 62 && grade >= 60) {
    console.log(`The grade ${grade} is a D-`);   
}
//Fail
else if (grade < 60) {
    console.log(`The grade ${grade} is a F`);   
}
else {
    console.log ("Unknown grade");
}
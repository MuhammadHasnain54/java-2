let city = prompt("Enter Your City Name")
if ( city == "karachi"){ 
    document.write("Welome To City of lights <br>");
}
else{ 
    document.write( " Wow! Welcome To Your City <br>");
}

let gender = prompt( " Enter Your Gender")
if( gender == "male" ){ 
    document.write( " Hello ! Welcome To My Website Sir. <br>");

}
else{
    document.write("Hello! Welcome To My Website Mam . <br><br><br>");
}


// 2
document.write("The Answer Of (a) is: The Alert will display<br>");
document.write("The Answer Of (b) is: The Alert will not display<br>");
document.write("The Answer Of (c) is: the 1st condition is false , the 2nd condition is true , the 3rd condition is false , the 4th condition is true<br>");
document.write("The Answer Of (d) is: The cost equals<br>");
document.write("The Answer Of (e) is: True wil display<br>");
document.write("The Answer Of (f) is: car is smaller than cat<br><br><br>");



// 3
let temp= prompt("What is the temprature today");
if(temp>=40){
    document.write("It is too hot outside.<br>");
}
else if(temp>=30 & temp<=39){
    document.write("The weather today is normal.<br>");
}
else if(temp>=20 & temp<=29){
    document.write("Today's weather is cool.<br>");
}
else if(temp>=10 & temp<=19){
    document.write("OMG! Today's weather is cold.<br>");
}
else{
    document.write("The weather is too cold now.<br>");
}

// 4
let num= prompt("Enter a Number");
if(num % 2 === 0){
    document.write("this is even number.<br>");
}
else{
    document.write("this is odd number.<br>");
}


// 5
let  number = prompt("Enter a number");
if(number % 3 != 0 ){
    document.write("this number is not divisible by 3.<br>")
}
else{
    document.write("this number is divisible by 3.<br>");
}


// 6
let game= prompt("Enter a Number for game From 1 to 10");
if(game == 5){
    document.write("Bingo<br>");
}
else{
    document.write("Close enough to the correct answer<br><br>");
}








var calcNum1= prompt("Enter A First Number To Calculate");
var calcNum2= prompt("Enter A Second Number To Calculate");
var opreation= prompt("Enter a opreation what you want to do + , - , / , *");
if(opreation == "+"){
    document.write("The Addition of Number 1 and Number 2 is: " + (+calcNum1+ +calcNum2) + "<br>");
}
else if(opreation === "-"){
    document.write("The Subtraction of Number 1 and Number 2 is: " + (calcNum1-calcNum2) + "<br>");
}
else if(opreation == "*"){
    document.write("The Multiplication of Number 1 and Number 2 is: " + calcNum1*calcNum2 + "<br>");
}
else if(opreation == "/"){
    document.write("The Division of Number 1 and Number 2 is: " + calcNum1/calcNum2 + "<br>");
}
else{
    document.write("Invalid Opreation\n<br>")
}
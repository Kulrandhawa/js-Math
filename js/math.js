

alert("Let's do some math!");
var num1 = prompt("Please type a number");
num1 = parseFloat(num1);
var num2 = prompt("Please type another number");
num2 = parseFloat(num2);
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
message += "<br>";

document.write(message);

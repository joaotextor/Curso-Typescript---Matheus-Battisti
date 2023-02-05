// Create a variable to hold a number
// Convert this number to string in a new variable
// The new variable should be typed by inference
// Print the number in a bigger string, using concatenation
var newNumber = parseInt(prompt("Insira um número"), 10);
var textNumber = newNumber.toString();
var longStringNumber = "Voc\u00EA digitou o n\u00FAmero ".concat(textNumber);
alert(longStringNumber);

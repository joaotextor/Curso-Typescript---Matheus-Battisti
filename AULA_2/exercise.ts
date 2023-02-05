// Create a variable to hold a number
// Convert this number to string in a new variable
// The new variable should be typed by inference
// Print the number in a bigger string, using concatenation

let newNumber: number = parseInt(prompt("Insira um número"), 10)
const textNumber = newNumber.toString()
const longStringNumber: string = `Você digitou o número ${textNumber}`

alert(longStringNumber)
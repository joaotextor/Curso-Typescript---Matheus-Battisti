const firstNumber = parseInt(prompt('Informe o primeiro número.'), 10)
const secondNumber = parseInt(prompt('Informe o segundo número.'), 10)

function soma(num1: number, num2: number) {
    return num1 + num2
}

const res: number = soma(firstNumber, secondNumber)
console.log(res)
//~ Arrays

let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers)

let names: string[] = ["João", "Matheus", "José"]
names.push("Analice")

names.forEach(name => {
    console.log(name)
})

//~ Sintaxe mais antiga de Arrays

let nums: Array<number> = [100,200]

nums.push(300)
console.log(nums)

//~ Any (Basicamente anula os princípios do Typescript)

const arr1: any = [1, "João", "Textor"]
arr1.push(["Desenvolvedor"])
console.log(arr1)

//~ Parâmetros tipados

function soma(a: number, b: number) {
    console.log(a+b)
}

soma(1,2)
//soma("1", "2") - ERRO


//~ Tipagem do retorno

function greeting(name: string): string {
    // return 1 ERRO
    return `Olá, ${name}`
}

//~ Funções anônimas

setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary)) Error: Argument of type 'number' is not assignable to parameter of type 'string'.
})

//~ Tipos de Objeto

function passCoordinates(coord: {x: number, y: number}) {
    console.log(`X coordinates: ${coord.x}`)
    console.log(`Y coordinates: ${coord.y}`)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// const fullName:{firstName: string, surname: string} = {firstName: "João", surname: "Textor"} | Also works, but too extense.


//~ Propriedades opcionais 

function showNumbers(a: number, b: number, c?: number) {
    console.log(`A: ${a}`)
    console.log(`D: ${b}`)
    console.log(`C: ${c}`)
}

showNumbers(1,2)
// showNumbers(1) | Error

//~ Validação de parâmetros opcionais

function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`

}

console.log(advancedGreeting("João"))
console.log(advancedGreeting("João", "Textor"))


//~ Union types | Exclusivo de Typescript | Determinar dois ou mais tipos para um dado. Sintaxe: <type1> | <type2> | <typeN>...

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(300)
showBalance("500")

//~ Union types 2

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado"
    }

    return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))
"use strict";
//~ Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
let names = ["João", "Matheus", "José"];
names.push("Analice");
names.forEach(name => {
    console.log(name);
});
//~ Sintaxe mais antiga de Arrays
let nums = [100, 200];
nums.push(300);
console.log(nums);
//~ Any (Basicamente anula os princípios do Typescript)
const arr1 = [1, "João", "Textor"];
arr1.push(["Desenvolvedor"]);
console.log(arr1);
//~ Parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
//soma("1", "2") - ERRO
//~ Tipagem do retorno
function greeting(name) {
    // return 1 ERRO
    return `Olá, ${name}`;
}
//~ Funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary)) Error: Argument of type 'number' is not assignable to parameter of type 'string'.
});
//~ Tipos de Objeto
function passCoordinates(coord) {
    console.log(`X coordinates: ${coord.x}`);
    console.log(`Y coordinates: ${coord.y}`);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// const fullName:{firstName: string, surname: string} = {firstName: "João", surname: "Textor"} | Also works, but too extense.
//~ Propriedades opcionais 
function showNumbers(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`D: ${b}`);
    console.log(`C: ${c}`);
}
showNumbers(1, 2);
// showNumbers(1) | Error
//~ Validação de parâmetros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("João"));
console.log(advancedGreeting("João", "Textor"));
//~ Union types | Exclusivo de Typescript | Determinar dois ou mais tipos para um dado. Sintaxe: <type1> | <type2> | <typeN>...
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(300);
showBalance("500");
//~ Union types 2
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é ${id}`);
}
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 30 };
console.log(`Interface | Nome: ${somePerson.name}, Idade: ${somePerson.age}`); // Vai imprimir o nome e a idade.
// type personType = { // Esse tipo de alteração não funciona com type.
//     age: number
// }
let person = { name: "João", age: 32 };
console.log(`Alias | Nome: ${person.name}, Idade: ${person.age}`);
//~ Literal Types
//~ Permite colocar valores como tipos
//~ Bastante utilizado em Union Types.
let test;
// test = 1 //! Type '1' is not assignable to type '"testando"'
// test = "test" //! Type '"test"' is not assignable to type '"testando"'
test = "testando";
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("center");
// showDirection("top") //!Argument of type '"top"' is not assignable to parameter of type '"left" | "right" | "center"'
//~ Non-null Assertion Operator
//~ Às vezes o TS pode evidenciar um erro baseado em um valor que no momento atual do código ainda não está disponível, mas que será preenchido.
//~ Utilizamos o caractere !
const p = document.getElementById("some-p");
// console.log(p.innerText) //!'p' is possibly 'null'.
console.log(p.innerText);
//~ Bigint
//~ Números muito altos
//~ Notação literal, como 100n
//~ Precisamos mudar a configuração do TS para a versão mínima ES2020
let n;
// n = 1 //!Type 'number' is not assignable to type 'bigint'.
n = 1000n; //! Error on compile: BigInt literals are not available when targeting lower than ES2020.
console.log(n);
console.log(typeof n);
//~ Symbol
//~ cria uma referência única para um valor
//~ Mesmo que ele possua um mesmo valor de outra variável, teremos valores sendo considerados diferentes.
//~ Também precisas usar o ES2020
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB); //False
console.log(symbolA === symbolB); //False

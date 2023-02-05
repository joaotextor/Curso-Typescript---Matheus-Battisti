//~ Arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
var names = ["João", "Matheus", "José"];
names.push("Analice");
names.forEach(function (name) {
    console.log(name);
});
//~ Sintaxe mais antiga de Arrays
var nums = [100, 200];
nums.push(300);
console.log(nums);
//~ Any (Basicamente anula os princípios do Typescript)
var arr1 = [1, "João", "Textor"];
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
    return "Ol\u00E1, ".concat(name);
}
//~ Funções anônimas
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary)) Error: Argument of type 'number' is not assignable to parameter of type 'string'.
});
//~ Tipos de Objeto
function passCoordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// const fullName:{firstName: string, surname: string} = {firstName: "João", surname: "Textor"} | Also works, but too extense.
//~ Propriedades opcionais 
function showNumbers(a, b, c) {
    console.log("A: ".concat(a));
    console.log("D: ".concat(b));
    console.log("C: ".concat(c));
}
showNumbers(1, 2);
// showNumbers(1) | Error
//~ Validação de parâmetros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("João"));
console.log(advancedGreeting("João", "Textor"));
//~ Union types | Exclusivo de Typescript | Determinar dois ou mais tipos para um dado. Sintaxe: <type1> | <type2> | <typeN>...
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(300);
showBalance("500");
//~ Union types 2
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));

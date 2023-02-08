"use strict";
//~ Generics
//~ Utilizamos Generics quando uma função pode aceitar mais de um tipo
//~ É uma prática mais interessante do que o any
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData(["Testando generic"]));
//~ Constraint em Generics
//~ Limita tipos aceitos nos Generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const productObj1 = {
    name: "Camisa",
    price: 19.99,
    brand: "Lacoste"
};
console.log(showProductName(productObj1));
const productObj2 = {
    ProductName: "Camisa",
    price: 19.99,
    brand: "Lacoste"
};
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "branca"
};
const myPen = {
    name: "BIC",
    wheels: false,
    engine: false,
    color: "Azul"
};
console.log(myCar);
console.log(myPen);
//~ Type parameters
//~ É um recurso de Generics
//~ Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
//~ Assim, conseguimos criar uma ligação entre o tipo genérico e sua chave
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'hd'));
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "João",
    age: 32,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(myChar, 'teste')) //! Argument of type '"teste"' is not assignable to parameter of type 'keyof Character'.
//~ typeof Type Operator
//~ Cria um novo tipo baseado no tipo de algum dado
const userName = "João";
const userName2 = "Matheus";
const userName3 = "Jorge";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const testing = "Some text";
// const testing2: CustomType = "Some text 2" //! Type '"Some text 2"' is not assignable to type '"Some text"'.

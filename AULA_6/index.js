"use strict";
//~ Tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    product.isAvailable ? console.log("O produto está disponível.") : null;
}
const shirt = {
    name: "Camisa",
    price: 19.90,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`User email: ${user.email}`);
    user.role ? console.log(`A função do usuário é ${user.role}`) : console.log(`Usuário sem função`);
}
const u1 = { email: "joaotextor@gmail.com", role: "Admin" };
const u2 = { email: "matheus@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "João",
    age: 32
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: [
        "Kame-hame-ha",
        "Genki Dama"
    ]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
//~ ReadOnlyArray
let myArray = ["Maça", "Laranja", "Banana"];
// myArray[3] = "Melão" //! Index signature in type 'readonly string[]' only permits reading.
console.log(myArray);
// Modificação pode ser feita usando o método map
myArray.forEach(item => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const mySecondArrayNumber: fiveNumbers = [1,2,3,4,5,6] //! Type '[number, number, number, number, number, number]' is not assignable to type 'fiveNumbers'. Source has 6 element(s) but target allows only 5.
// const myMixedArrayNumber: fiveNumbers = [1,2,"3",4,5] //! Type 'string' is not assignable to type 'number'.
console.log(myNumberArray);
const anotherUser = ["João", 32];
//~ Tupla com readonly
//~ Dado super restrito
//~ Semelhante às Tuplas no Python
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);

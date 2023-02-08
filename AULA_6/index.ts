//~ Tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    product.isAvailable ? console.log("O produto está disponível.") : null


}

const shirt:Product = {
    name: "Camisa",
    price: 19.90,
    isAvailable: true
}

showProductDetails(shirt)

//~ Propriedades opcionais em interfaces

interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`User email: ${user.email}`)
    user.role ? console.log(`A função do usuário é ${user.role}`) : console.log(`Usuário sem função`)
}

const u1:User = {email: "joaotextor@gmail.com", role: "Admin"}
const u2:User = {email: "matheus@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

//~ Propriedades readonly
//~ valor constantes em objetos

interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4,
}

console.log(fusca)

// fusca.wheels = 5 //! Cannot assign to 'wheels' because it is a read-only property.

//~ Index Signature
//~ Não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array.

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste' //! Type 'string' is not assignable to type 'number'.

//~ Extending interfaces
//~ Herença para criar tipos mais complexos por meio de uma interface
//~ Uma interface pode herdar as propriedades e tipos já definidos por outra

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const matheus: Human = {
    name: "João",
    age: 32
}

console.log(matheus)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: [
        "Kame-hame-ha",
        "Genki Dama"
    ]
}

console.log(goku)


//~ Intersection Types
//~ Utilizados para criar tipos mais complexos a partir de duas interaces

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)


//~ ReadOnlyArray

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

// myArray[3] = "Melão" //! Index signature in type 'readonly string[]' only permits reading.

console.log(myArray)

// Modificação pode ser feita usando o método map
myArray.forEach(item => {
    console.log(`Fruta: ${item}`)
})

myArray = myArray.map(item => {
    return `Fruta: ${item}`
})

console.log(myArray)


//~ Tuplas
//~ Predefinimos a quantidade e tipo de elementos

type fiveNumbers = [
    number,
    number,
    number,
    number,
    number
]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// const mySecondArrayNumber: fiveNumbers = [1,2,3,4,5,6] //! Type '[number, number, number, number, number, number]' is not assignable to type 'fiveNumbers'. Source has 6 element(s) but target allows only 5.
// const myMixedArrayNumber: fiveNumbers = [1,2,"3",4,5] //! Type 'string' is not assignable to type 'number'.

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["João", 32]


//~ Tupla com readonly
//~ Dado super restrito
//~ Semelhante às Tuplas no Python

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])
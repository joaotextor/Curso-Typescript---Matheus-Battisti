//~ Generics
//~ Utilizamos Generics quando uma função pode aceitar mais de um tipo
//~ É uma prática mais interessante do que o any

function showData<T>(arg: T): string {
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))
console.log(showData(true))
console.log(showData(["Testando generic"]))

//~ Constraint em Generics
//~ Limita tipos aceitos nos Generics

function showProductName<T extends {name:string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const productObj1 = {
    name: "Camisa",
    price: 19.99,
    brand: "Lacoste"
}

console.log(showProductName(productObj1))

const productObj2 = {
    ProductName: "Camisa",
    price: 19.99,
    brand: "Lacoste"
}

// console.log(showProductName(productObj2)) //! Argument of type '{ ProductName: string; price: number; brand: string; }' is not assignable to parameter of type '{ name: string; }'.

//~ Interfaces com Generics

interface MyObject<T,U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "branca"
}

const myPen:Pen = {
    name: "BIC",
    wheels: false,
    engine: false,
    color: "Azul"
}

console.log(myCar)
console.log(myPen)

//~ Type parameters
//~ É um recurso de Generics
//~ Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
//~ Assim, conseguimos criar uma ligação entre o tipo genérico e sua chave

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'hd'))
console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) //! Argument of type '"teste"' is not assignable to parameter of type '"hd" | "ram"'.


//~ keyof Type Operator 
//~ Aceita dados do tipo objeto
//~ Pode criar o tipo baseado nas chaves do objeto passado como parâmetro

type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C):string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: "João",
    age: 32,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
// console.log(showCharName(myChar, 'teste')) //! Argument of type '"teste"' is not assignable to parameter of type 'keyof Character'.

//~ typeof Type Operator
//~ Cria um novo tipo baseado no tipo de algum dado

const userName: string = "João"

const userName2: typeof userName = "Matheus"
// const userName3: typeof userName = 12 //! Type 'number' is not assignable to type 'string'

type x = typeof userName

const userName3: x = "Jorge"

//~ Indexed Access Types
//~ Cria um tipo baseado em uma chave de objeto

type Truck = {
    km: number,
    kg: number,
    description: string
}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de ${km}`)
}

showKm(newTruck.km)

//~ Conditional Expressions Type
//~ Tipo por condição - Permite criar um novo tipo com base em if/else
//~ Não são aceitas expressões tào amplas

interface A {

}

interface B extends A {

}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = "Teste" //! Type 'string' is not assignable to type 'number'.

type myTypeB = Teste extends {showNumber(): number} ? string : boolean


//~ Template Literals Type
//~ Criar tipos com Template literals
//~ Customizar tipos de maneiras infinitas

type testA = "text"

type CustomType = `Some ${testA}`

const testing: CustomType = "Some text"
// const testing2: CustomType = "Some text 2" //! Type '"Some text 2"' is not assignable to type '"Some text"'.


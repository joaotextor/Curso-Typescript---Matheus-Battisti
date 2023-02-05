// Numbers
let x: number = 10

console.log(x)
console.log(typeof x)

let y: number = 15.2332

console.log(y.toPrecision(4))
console.log(typeof y)

//String

const firstName: string = "João"
const lastName: string = "Textor"
const fullName: string = `${firstName} ${lastName}`

console.log(fullName)
console.log(typeof fullName)

//Boolean

let a: boolean = false

console.log(typeof a)
console.log(a)
console.log(!a)

// Inference e Annotation

const ann: string = "Teste"
const inf = "Teste"

//! ann = 1 // TypeError
//! inf = 1 // TypeError
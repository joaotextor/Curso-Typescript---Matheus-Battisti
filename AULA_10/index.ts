//~ Exemplo decorator

function myDecorator() {
    console.log("Iniciando decorator")
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)

    }
    
}

class myClass {
    @myDecorator()
    testing() {
        console.log("Terminando a execução do método")
    }
}

const myObj = new myClass()

myObj.testing()

//~ Multiplos decorators

function a() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou A")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}
function b() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou B")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class MultipleDecorators {
    //~ A execução se dá do mais próximo do método para o mais longe (de baixo para cima)
    @a() //Executa por último
    @b() //Executa primeiro 
    testing() {
        console.log("Terminando a execução de A")
    }
}

const multiple = new MultipleDecorators()

multiple.testing()

//~ Class decorator - está ligado ao constructor
//~ Quando o constructor for executado, o decorator também é
//~ Permite acrescentar algo na criação de classes

function classDec(constructor: Function) {
    console.log(constructor)
    if (constructor.name === "User") { //constructor.name é o nome da classe
        console.log("Criando usuário")
    }
}


@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const matheus = new User("Matheus")

console.log(matheus)

//~ Decorator de método
//~ Modificar a execução de métodos

function enumerable(value: boolean) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        return `O nome da máquina é ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator)


//~ Acessor Decorator
//~ ANtes de um set ou um getter

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    @enumerable(true)
    get showName() {
        return `O nome do monstro é ${this.name}`
    }

    get showAge() {
        return `O nome do monstro é ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

//~ Property Decorators
//~ Em especial utilizado para validações

function formatNumber(){
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id:string) {
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)

//~ Class Decorator na prática

function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id
    createdAt?: Date


    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)

const newPen = new Pen(55)

console.log(newBook.createdAt)
console.log(newPen.createdAt)


//~ Method Decorator na prática

function checkIfUserPosted() {
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor) {
            const childFunction = descriptor.value
            console.log(childFunction)
            descriptor.value = function(...args: any[]) {
                if (args[1] === true) {
                    console.log("Usuário já postou!")
                    return null
                } else {
                    return childFunction.apply(this, args)
                }
            }
            return descriptor
        }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}
const newPost = new Post()

newPost.post("Meu Primeiro Post", newPost.alreadyPosted)
newPost.post("Meu Segundo Post", newPost.alreadyPosted)

//~ Property Decorator

function Max(limit: number) {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos.`)
            } else 
            value = newVal
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username
    }
}

let joao = new Admin("joaotextor2236")
// let pedro = new Admin("pedro")

console.log(joao)
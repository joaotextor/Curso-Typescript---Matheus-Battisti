//~ Typeof type guard

function sum(a: number | string, b: number | string) {
    
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a)+parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a+b)
    } else {
        console.log("Impossível realizar a soma")
    }
}

sum("1", "10")
sum(20, 30)
sum(20, "30")

//~ Checar se valor existe

function operations(arr: number[], operation?: string | undefined) {
    if (operation) { //*Esse é o narrow
        
        if(operation === "sum") {
            const sum = arr.reduce((acc, curr) => acc + curr)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((acc, curr) => acc * curr)
            console.log(multiply)
        }

    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1,2,3])
operations([1,2,3], "sum")
operations([1,2,3,4], "multiply")

//~ Operador instanceof - verificar se um dado pertence a uma determianda classe

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    role

    constructor(name: string, role: string) {
        super(name)
        this.role = role
    }

}

const john = new User("John")
const paul = new SuperUser("Paul", "admin")

console.log(john)
console.log(paul)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá, ${user.role} ${user.name}. Deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá, ${user.name}! Tenha um bom dia.`)
    }
}

userGreeting(john)
userGreeting(paul)


//~ Operador in - Verifica se existe uma propriedade no objeto

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        breed ? this.breed = breed : null
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {

    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log(`O cachorro é um SRD`)
    }
}

showDogDetails(turca)
showDogDetails(bob)
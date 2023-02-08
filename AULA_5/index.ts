//~ Funções sem return
//~ Utilizamos o void

function withoutReturn():void {
    console.log("Esta função não tem retorno")
}

withoutReturn()

//~ Callback como argumento
//~ Função de callback como argumento de função
//~ Tipo de retorno do callback

function greeting(name: string):string {
    return `Olá, ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "João")

//~ Generic functions
//~ quando o tipo de retorno é relacionado ao tipo do argumento, mas não se sabe que tipo será recebido
//~ Normalmente se utiliza letras como T ou U para definir os generics. É uma convenção

function firstElement<T>(arr: T[]):T {
    return arr[0]
}

console.log(firstElement([1,2,3,4]))
console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement("Teste")) //! Argument of type 'string' is not assignable to parameter of type 'any[]'.


function mergeObject<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObj = mergeObject({name: "João"}, {age: 32, job: "Programador"})
console.log(newObj)


//~ Constraints nas Generic Functions
//~ podem reduzir o escorpo das Generic Functions
//~ Limitamos os tipos que podem ser utilizados no Generic

function biggestNumber<T extends number | string>(a: T, b: T):T {
    let biggest: T

    if(+a > +b) { //+variável converte o string numérico em number
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(4,3))
console.log(biggestNumber(4,12))
console.log(biggestNumber(4,4))
// console.log(biggestNumber(5,"12")) //!ERRO. Tipos diferentes. Deve-se usar <T,U>

//~ Definindo tipo de parâmetros
//~ Em Generic functions, temos que utilizar parâmetros de tipos semelhantes, caso contrário recebemos erro.
//~ Há como determinar o tipo dos parâmetros aceitos

function mergeArrays<T>(array1: T[], array2: T[]) {
    return array1.concat(array2)
}

// Para não dar erro, podemos, ao chamar a função, declarar quais tipos de argumentos podem ser recebidos
console.log(mergeArrays<number | string>([1,2,4], ["teste1", "teste2"])) //Retorna [1, 2, 4, 'teste1', 'teste2']

//~ Parâmetros opcionais
//~ Deixamos os opcionais no fim da lista

function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Olá, ${greet} ${name}, tudo bem?`
    }

    return `Olá, ${name}, tudo bem?`
}

console.log(modernGreeting("João", "sr."))


//~ Parâmetro default

function somaDefault(n: number, m: number = 10):number {
    return n+m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 12))

//~ Tipo unknown
//~ Semelhante ao any, mas precisa validar o tipo pra executar

function doSomething(x: unknown) {
    // console.log(x[0]) //! 'x' is of type 'unknown'.
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é number")
    }
}

doSomething([5,2,3,4])


//~ Tipo Never
//~ Tipo de retorno. Semelhante ao void 
//~ Utilizado quando a função não retorna nada
//~ Exemplo: retorno de erros

function showErrorMessage(msg: string):never {
    // return "oi" //! Type 'string' is not assignable to type 'never'.
    throw new Error(msg)
}

// showErrorMessage("Algum erro")


//~ Rest operator com TS

function sumAll(...n: number[]) {
    return n.reduce((sum, number) => sum + number)
}

console.log(sumAll(1,2,4,5,6,19))
// console.log(sumAll("teste")) //! Argument of type 'string' is not assignable to parameter of type 'number'.


//~ Destructuring com TS
//~ Precisamos determinar o tipo de cada dado que será desestruturado

function showProductDetails({name, price}:{name:string, price: number}):string {
    return `O nome do produto é ${name} e ele cusa ${price}`
}

const shirt = {name: "camisa", price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste", age: 30})) //! Argument of type '{ name: string; age: number; }' is not assignable to parameter of type '{ name: string; price: number; }'. Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; price: number; }'.
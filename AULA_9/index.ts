//~ Módulos

//~ Importação de função default

import importGreet from './greet'

console.log(importGreet("João"))


//~ Importação de variável

import { x } from './variable'

console.log(x)

//~ Múltiplas importações

import {
    a,
    b,
    myFunction
} from './multiple'

console.log(a)
console.log(b)
myFunction()

//~ Alias de importação

import { bigNamedFunction as bnf } from './changename'

bnf()


//~ Importando tudo
//~ Utiliza o *
//~ Os dados vêm em um objeto


import * as myNumbers from './numbers'

console.log(myNumbers)

const nx1 = myNumbers.n1

console.log(nx1)

//~ importando tipos

import {Human} from './mytype'

class User implements Human {
    constructor(
        public name: string, 
        public age: number
    ) {}
}

const joao = new User("João", 32)

console.log(joao)
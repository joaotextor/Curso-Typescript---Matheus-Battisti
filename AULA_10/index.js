"use strict";
//~ Exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando a execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//~ Multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MultipleDecorators {
    //~ A execução se dá do mais próximo do método para o mais longe (de baixo para cima)
    testing() {
        console.log("Terminando a execução de A");
    }
}
__decorate([
    a() //Executa por último
    ,
    b() //Executa primeiro 
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//~ Class decorator - está ligado ao constructor
//~ Quando o constructor for executado, o decorator também é
//~ Permite acrescentar algo na criação de classes
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") { //constructor.name é o nome da classe
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const matheus = new User("Matheus");
console.log(matheus);
//~ Decorator de método
//~ Modificar a execução de métodos
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator);
//~ Acessor Decorator
//~ ANtes de um set ou um getter
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `O nome do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
//~ Property Decorators
//~ Em especial utilizado para validações
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
//~ Class Decorator na prática
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook.createdAt);
console.log(newPen.createdAt);
//~ Method Decorator na prática
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu Primeiro Post", newPost.alreadyPosted);
newPost.post("Meu Segundo Post", newPost.alreadyPosted);
//~ Property Decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos.`);
            }
            else
                value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let joao = new Admin("joaotextor2236");
// let pedro = new Admin("pedro")
console.log(joao);

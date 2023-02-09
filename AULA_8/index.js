"use strict";
//~ Campos em classes
class User {
}
const joao = new User();
console.log(joao);
joao.name = "João";
joao.age = 32;
// joao.job = "programador" //! Property 'job' does not exist on type 'User'.' 
//~ Constructor
//~ Função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const matheus = new NewUser("Matheus", 30);
console.log(matheus);
//~ Campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
fusca.name = "Fusca 1.0";
// fusca.wheels = 5 //! Cannot assign to 'wheels' because it is a read-only property.
//~ Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//~ Métodos - são as funções das classes
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy!");
jimmy.greeting();
//~ O this
//~ Serve para se referir ao objeto em si
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const mercedez = new Truck("M123", 400);
mercedez.showDetails();
//~ Getters
//~ Retornam propriedades do objeto
//~ Podemos modificá-las no retorno
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const joaotextor = new Person("João", "Textor");
console.log(joaotextor.name);
console.log(joaotextor.fullName);
//~ Setters
//~ Modificam/Atribuem valores
//~ Possível fazer validação antes de inserir uma propriedade
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} | Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 12;
console.log(myCoords);
console.log(myCoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    get itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new BlogPost("Trabalhando com Typescript");
console.log(myPost.itemTitle);
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    get itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
//~ Override de métodos
//~ Técnica utilizada para substituir um método de uma classe que herdamos algo
//~ Usamos o mesmo nome do método, mas com função diferente
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando o override");
    }
}
const myObject = new Nova();
myObject.someMethod();
//~ Visibilidade
//~ Expor métodos de classe
//~ public, protected, private
//~ Visibilidade: Public - Modo default
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//~ Visibilidade: Protected
//~ uma propriedade só pode ser acessada por uma subclasses usando um método 
class E {
    constructor() {
        this.x = 50;
    }
    protectedMethod() {
        console.log("Método protegido");
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    showProtecedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
// console.log(fInstance.x) //! Property 'x' is protected and only accessible within class 'E' and its subclasses.
fInstance.showX();
fInstance.showProtecedMethod();
//~ Visibilidade: private
//~ propriedades e objetos só podem ser acessados na clase que os definiu
//~ Ainda assim, precisam de métodos para serem acessados
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    get showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name) //! Property 'name' is private and only accessible within class 'PrivateClass'.
console.log(pObj.showName);
// console.log(pObj.privateMethod) //! Property 'privateMethod' is private and only accessible within class 'PrivateClass'.
pObj.showPrivateMethod();
class TestingPrivate extends PrivateClass {
    myMethod() {
        // this.privateMethod() //! Property 'privateMethod' is private and only accessible within class 'PrivateClass'.
    }
}
//~ Static Members
//~ Métodos e propriedades estáticos
//~ Faz possível acessar as propriedades e métodos da classe sem as instanciar em um objeto
//~ Serve para classes helpers/utils
class StaticMembers {
    static staticMethod() {
        console.log("Método estático");
    }
}
StaticMembers.prop = "Test static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//~ Generic Class
//~ As propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
const newItemNumbers = new Item(1, 4);
console.log(newItemNumbers);
//~ Parameters properties
//~ Define a privacidade, nome e tipo das propriedades no constructor
//~ Resume um pouco a sintaxe das classes
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price) //! Property 'price' is private and only accessible within class 'ParameterProperties'.
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//~ Class expression
//~ Classe anônima
//~ Podemos utilizar generics junto desse recurso
//~ Encapsulamos a classe numa variável
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("João");
console.log(pessoa);
//~ Abstract class
//~ Serve como molde de outra classe, parecido com interfaces
//~ Não podemos instanciar objetos a partir destas clases
class AbstractClass {
}
// const newObj = new AbstractClass() //! Cannot create an instance of an abstract class.
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Josias");
newAbstractObject.showName();
//~ Relação entre clases
//~ Podemos criar um objeto com base em outra classe
class Dog {
}
class Cat {
}
const doguinho = new Cat(); //~ o TS não reclama disso, pois ambas classes são idênticas, apesar do nome
console.log(doguinho);

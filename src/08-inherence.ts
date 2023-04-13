export class Animal {
  constructor(public name: string){}

  move(): void {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`
  }
}

const animal = new Animal('titi');
animal.move();
console.log(animal.greeting());

//Queremos crear una clase Dog, la cual va tener información similar a la de la clase Animal.
//Para esto, usamos la herencia y la palabra clave "extends":

// export class Dog extends Animal {}

// const firu = new Dog('firu');
// firu.move();
// console.log(firu.greeting());

//En el caso anterior, estamos heredando TODOS los atributos y métodos de la clase padre Animal

//También puedo definir atributos y métodos para la clase hija:

// export class Dog extends Animal {
//   woof(times: number): void {
//     for (let index = 0; index < times; index++) {
//       console.log('woof!');
//     }
//   }
// }

// const firu = new Dog('firu');
// firu.move();
// console.log(firu.greeting());
// firu.woof(5);

//Para el caso que quiera definir atributos para la clase hija y a su vez heredar atributos y métodos de la clase padre, debo hacer uso del "super":

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string,
    public age: number
    ){
      super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const firu = new Dog('firu', 'Alejo', 12);
firu.move();
console.log(firu.greeting());
firu.woof(5);
console.log(firu.owner);
console.log(firu.age);

export abstract class Animal { // usando "abstract" impido que pueda crear instancias de la clase, PERO puedo heredar las propiedades de dicha clase a una hija
  constructor(protected name: string){}

  move(): void {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething(): void {
    console.log('I\'m doing something');

  }
}

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
      console.log(`${this.name} dijo: woof!`);
    }
    this.doSomething();
  }

  move(): void {
    console.log('moving as a dog');
    super.move();
  }
}

// const animal = new Animal('snorky'); // Error! pues Animal es una clase abstracta
// animal.greeting(); // Error! pues Animal es una clase abstracta

const firu = new Dog('firu', 'Alejo', 12);
firu.woof(1);
firu.move();


export class Animal {
  constructor(protected name: string){} //protected = private + herencia

  move(): void {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething(): void { // También funciona en métodos
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
      console.log(`${this.name} dijo: woof!`); //puedo usar el atributo gracias a protected
    }
    this.doSomething();
  }

  move(): void {
    console.log('moving as a dog');
    super.move(); // uso los métodos de la clase Animal dentro de un método de la clase Dog
  }
}

const firu = new Dog('firu', 'Alejo', 12);
// firu.name = 'otro firu'; //Error! No puedo modificarla fuera de la clase padre
firu.woof(1);
firu.move();
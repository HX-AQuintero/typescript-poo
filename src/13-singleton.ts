// Vamos a crear una clase MyService típica y dos instancias de la clase:

export class MyService {
  constructor(private name: string){}

  getName(): string {
    return this.name;
  }
}

const myService1 = new MyService('service 1');
console.log(myService1); // MyService { name: 'service 1' }

const myService2 = new MyService('service 2');
console.log(myService2); // MyService { name: 'service 2' }

console.log(myService1 === myService2); //false, son instancias disitntas

// El patrón Singleton garantiza que cada vez que creamos una instancia de MyService, no se crean múltiples de estas sino una ÚNICA que se comparta en toda la aplicación. ¿Cómo lo hacemos?

export class MyServiceSingleton {
  private static instance: MyServiceSingleton | null = null;

  private constructor(private name: string){}

  getName(): string {
    return this.name;
  }

  public static createInstance(name: string) {
    if(MyServiceSingleton.instance === null){
      MyServiceSingleton.instance = new MyServiceSingleton(name);
    }
    return MyServiceSingleton.instance;
  }
}

const myServiceSingleton1 = MyServiceSingleton.createInstance('service 1');
console.log(myServiceSingleton1.getName()); // service 1

const myServiceSingleton2 = MyServiceSingleton.createInstance('service 2');
console.log(myServiceSingleton2.getName()); // service 1

const myServiceSingleton3 = MyServiceSingleton.createInstance('service 2');
console.log(myServiceSingleton3.getName()); // service 1

console.log(myServiceSingleton1 === myServiceSingleton2 && myServiceSingleton2 === myServiceSingleton3); // true

// class Service extends MyServiceSingleton {} // Error! NO puedo heredar dado que el contructor es privado!


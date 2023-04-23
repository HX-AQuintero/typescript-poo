import { Dog } from "./09-protected";

//El uso de los generics es poder enviar tipado como parámetro
function getValue<T>(value: T): T {
  return value;
}

//Mediante los genéricos podemos indicar que aquello que se recibe tiene un tipo maleable.
//O sea, puede admitir diversos tipos para obtener la ayuda del compiler:

getValue<number>(12).toFixed();
getValue<string>('34').length;
getValue<number[]>([1,2,3,4]).findIndex(item => item === 3);

//Puede ser también de tipo Clase:
const perrito = new Dog('Fifi', 'Alejo', 4);
console.log(getValue<Dog>(perrito));

//Podemos pasar también más de un tipado como parámetro:
function prueba<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let persona = {
  nombre: 'Alejo',
  email: 'mail@mail.com'
}

console.log(prueba(persona, 'nombre'));//Funciona!
// console.log(prueba(persona, 'direccion'));//Error, la propiedad no existe dentro del objeto persona


// La librería MAth tiene tanto atributos como métodos estáticos:
console.log(Math.max(1,2,34,4,23,346));
console.log(Math.PI);

// Observemos que NO estamos creando ninguna instancia de la clase Math para usar sus atributos o métodos.

// Justamente, eso hace "static": permite usar atributos y ejecutar métodos directamente en la clase sin necesidad de usar una instancia para estos.

// Vamos a crear una librería propia aplicando este concepto de "static":
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,34,4,23,346));

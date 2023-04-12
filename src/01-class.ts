//Recordar cómo funcionan las instancias de una clase
const date = new Date();
date.getTime();

const date2 = new Date(1993, 1, 12);
date2.getTime();

console.log(date);
console.log(date2);

//Typescript me obliga a inicializar las propiedades de la clase. Podemos hacerlo en el momento o mediante el constructor
export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const date1 = new MyDate(1996, 12, 31);
console.log(date1);

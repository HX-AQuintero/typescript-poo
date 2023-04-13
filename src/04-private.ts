export type Date = 'days' | 'months' | 'years';

export class MyDate {
  year: number;
  readonly month: number; //indica que este atributo será inmutable
  private day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  add(amount: number, type: Date): string {
    type === 'days' ? this.day += amount : this.day;
    // type === 'months' ? this.month += amount : this.month;
    type === 'years' ? this.year += amount : this.year;
    return `${this.day}/${this.month}/${this.year}`;
  }

  //Definimos un método público para obtener el valor de day que es privado
  getDay(): number {
    return this.day
  }
}

const date = new MyDate(1993, 7, 9);
console.log('current date:', date.printFormat());

// console.log(date.day); // error! Solo accesible dentro de la clase
// date.day = 2004; // error! Solo accesible dentro de la clase
// date.addPadding(12); // error! Solo accesible dentro de la clase

//date.#addPadding(12); // se usa también # para definir métodos o atributos privados
console.log(date.getDay());

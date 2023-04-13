export type Date = 'days' | 'months' | 'years';

export class MyDate {
  constructor(
    public year: number = 1996,
    readonly month: number = 8,
    private readonly _day: number //evita confusiones entre el getter y el atributo privado
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  add(amount: number, type: Date): string {
    // type === 'days' ? this.day += amount : this.day;
    // type === 'months' ? this.month += amount : this.month;
    type === 'years' ? this.year += amount : this.year;
    return `${this._day}/${this.month}/${this.year}`;
  }

  get day(): number {
    //puede contener código
    return this._day
  }

  get isLeapYear(): boolean { //No necesariamente existen para usar atributos o métodos privados
    return this.year % 400 === 0 ? true : this.year % 100 === 0 ? false : this.year % 4 === 0
  }

  // get getterError(): void {} //Error! Todos los getters deben siempre retornar algo
}

const date = new MyDate(2004, 7, 9);
console.log('current date:', date.printFormat());
date.day; // No es el atributo privado, es el getter!
console.log('dia:', date.day);
console.log('¿es bisiesto?', date.isLeapYear); //Sin ejecutar por ser getter


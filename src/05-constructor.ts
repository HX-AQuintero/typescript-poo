export type Date = 'days' | 'months' | 'years';

export class MyDate {
  constructor( //con esta nueva sintaxis, debemos explicitar el acceso a los atributos
    public year: number = 1996, //puedo definir valores por defecto
    readonly month: number = 8, //puedo definir valores por defecto
    private readonly day: number //puedo definir que accesibilidad y mutabilidad
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
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
    return `${this.day}/${this.month}/${this.year}`;
  }

  getDay(): number {
    return this.day
  }
}

const date = new MyDate(1993, 7, 9);
console.log('current date:', date.printFormat());
console.log(date.getDay());

//teniendo en cuenta los valores por defecto, podemos hacer lo siguiente:
const date2 = new MyDate(undefined, 6, 9);
console.log('current date2:', date2.printFormat());
console.log(date2.getDay());

const date3 = new MyDate(undefined, undefined, 11);
console.log('current date3:', date3.printFormat());
console.log(date3.getDay());
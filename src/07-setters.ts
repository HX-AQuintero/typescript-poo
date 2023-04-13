export type Date = 'days' | 'months' | 'years';

export class MyDate {
  constructor(
    private _year: number = 1996,
    readonly month: number = 8,
    private readonly _day: number
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this._year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  add(amount: number, type: Date): string {
    // type === 'days' ? this.day += amount : this.day;
    // type === 'months' ? this.month += amount : this.month;
    type === 'years' ? this.year += amount : this._year;
    return `${this._day}/${this.month}/${this._year}`;
  }

  get day(): number {
    return this._day
  }

  get isLeapYear(): boolean {
    return this._year % 400 === 0 ? true : this._year % 100 === 0 ? false : this._year % 4 === 0
  }

  get year(): number {
    return this._year;
  }

  set year(newValue: number) { // setters no deben retornar nada. Serán entonces void type, pero da error si se especifica
   if(1900 <= newValue && newValue <= 2000){
      this._year = newValue;
   } else {
    throw new Error('year out of range');
   }
  }
}

const date = new MyDate(2004, 7, 9);
console.log('current date:', date.printFormat());
date.year = 1968;
console.log('Año correcto:', date.year);
date.year = 2008;
console.log('Esto no se verá', date.year);


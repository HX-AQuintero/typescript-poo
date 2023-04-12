export type Date = 'days' | 'months' | 'years';

export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: Date): string {
    type === 'days' ? this.day += amount : this.day;
    type === 'months' ? this.month += amount : this.month;
    type === 'years' ? this.year += amount : this.year;
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const date = new MyDate(1993, 7, 9);
console.log(date.year);
date.year = 2004;
console.log(date.year);

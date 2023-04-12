export type Date = 'days' | 'months' | 'years';

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: Date): string {
    type === 'days' ? this.day += amount : this.day;
    type === 'months' ? this.month += amount : this.month;
    type === 'years' ? this.year += amount : this.year;
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const date = new MyDate(1993, 7, 9);
console.log('current date:', date.printFormat());

const newDate = date.add(6, "years");
console.log('new date:', newDate);

const newDate2 = date.add(7, "days");
console.log('newest date:', newDate2);
console.log(date.day);
console.log(date.month);
console.log(date.year);


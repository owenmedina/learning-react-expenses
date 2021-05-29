import {v4 as uuid} from 'uuid';

interface IExpense {
    id: string;
    date: Date;
    title: string;
    amount: number;
}

export class Expense implements IExpense {
    id: string;
    date: Date;
    title: string;
    amount: number;

    constructor(date: Date, title: string, amount: number) {
        this.id = uuid();
        this.date = date;
        this.title = title;
        this.amount = amount;
    }
}
import {v4 as uuid} from 'uuid';

interface IData {
    id: string;
    value: number;
    label: string;
}

export class Data implements IData {
    id: string;
    value: number;

    label: string;

    constructor(value: number, label: string) {
        this.id = uuid();
        this.value = value;
        this.label = label;
    }
}
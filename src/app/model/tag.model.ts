import {Expense} from "./expense.model";

export class Tag {
  constructor(name: string) {
    this.name = name;
  }

  id: number;
  name: string;
  slug: string;
  userId: number;
}

export class TagDetail {

  usedCount: number;
  expenses: Expense[];

}

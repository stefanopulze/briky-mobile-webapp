import {Tag} from "./tag.model";
import {Category} from "./category.model";

export class Expense {

  id: number;
  userId: number;
  value: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  description: string;
  category: Category = new Category();
  createdAt: Date;
  updatedAt: Date;

  tags: Tag[] = new Array<Tag>();
  $tag: string;


  constructor() {
    //this.createdAt = new Date();
  }
}

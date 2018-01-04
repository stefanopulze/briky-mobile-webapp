import {Tag} from "./tag.model";

export class Expense {

  id: number;
  userId: number;
  value: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  tags: Tag[] = new Array<Tag>();
  $tag: string;


  constructor() {
    //this.createdAt = new Date();
  }
}

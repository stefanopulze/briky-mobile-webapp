import { Injectable } from '@angular/core';
import {Expense} from "../model/expense.model";
import {DashboardResponse} from "../model/dashboard.model";
import {Tag} from "../model/tag.model";

@Injectable()
export class DataService {

  expense: Expense;
  dashboard: DashboardResponse;
  tag: Tag;

  constructor() { }

  isDashboardResponseValid() {
    return this.dashboard && this.dashboard.lastExpenses.length > 0;
  }

  dashboardNeedUpdate() {
    this.dashboard = null;
  }

}

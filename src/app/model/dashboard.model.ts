import {Expense} from "./expense.model";

export class DashboardResponse {
  currentMonthValue: number;
  previousMonthValue: number;

  lastExpenses: Expense[];
}

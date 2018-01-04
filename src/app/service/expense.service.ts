import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expense} from "../model/expense.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {del} from "selenium-webdriver/http";

@Injectable()
export class ExpenseService {

  constructor(private http: HttpClient) { }

  create(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(environment.endpoint + '/expense', expense);
  }

  update(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(environment.endpoint + '/expense/' + expense.id, expense);
  }

  delete(expense: Expense): Observable<Expense> {
    return this.http.delete<Expense>(environment.endpoint + '/expense/' + expense.id);
  }

}

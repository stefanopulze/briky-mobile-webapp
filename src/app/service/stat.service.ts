import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {DashboardResponse} from "../model/dashboard.model";

@Injectable()
export class StatService {

  constructor(private http: HttpClient) { }

  dashboard(): Observable<DashboardResponse> {
    return this.http
      .get<DashboardResponse>(environment.endpoint + '/stat/dashboard')
      .map(data => {
        data.lastExpenses.forEach(expense => {

          expense.$tag = expense.tags.map(tag => { return tag.name; }).join(',');

        });
        return data;
      });
  }

}

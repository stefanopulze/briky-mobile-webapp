import {Component, OnInit} from '@angular/core';
import {StatService} from "../../service/stat.service";
import {DashboardResponse} from "../../model/dashboard.model";
import {Expense} from "../../model/expense.model";
import {Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: DashboardResponse = new DashboardResponse();

  constructor(
    private service: StatService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    if(this.dataService.isDashboardResponseValid()) {
      this.data = this.dataService.dashboard;
    } else {
      this.refresh();
    }
  }

  editExpense(expense: Expense) {
    this.dataService.expense = expense;
    this.router.navigate(['/expense', expense.id]);
  }

  refresh() {
    this.service.dashboard().subscribe(data => {
      console.log(data);
      this.dataService.dashboard = data;
      this.data = data;
    });
  }

}

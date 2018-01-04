import {Component, Input, OnInit} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {Expense} from "../../model/expense.model";
import {Tag} from "../../model/tag.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  @Input() title: string

  expense: Expense = new Expense();
  tempTagName: string;
  saving: boolean = false;

  constructor(private service: ExpenseService,
              private dataService: DataService,
              private router: Router,
              route: ActivatedRoute) {

    route.params.subscribe(this.prepareDataForParams.bind(this));
  }

  prepareDataForParams(params: any) {
    if (params && params.hasOwnProperty('id')) {

      if (this.dataService.expense) {
        this.expense = this.dataService.expense;

        if(this.expense.tags.length > 0) {
          this.tempTagName = this.expense.tags[0].name;
        }
      }

    }

    this.saving = false;
  }

  ngOnInit() {
  }

  saveExpense() {
    if (this.saving) {
      console.log('Salvataggio pendente...');
      return;
    }

    this.saving = true;

    if (this.expense.id) {
      // Update
      if(this.expense.tags.length > 0) {
        if(this.expense.tags[0].name !== this.tempTagName) {
          this.expense.tags[0] = new Tag(this.tempTagName);
        }
      }

      this.service.update(this.expense).subscribe(data => {
        this.saving = false;
      }, error2 => {
        this.saving = false;
      });
    } else {
      // Create
      this.expense.tags.push(new Tag(this.tempTagName));
      this.service.create(this.expense).subscribe(this.returnBackToDashboard.bind(this));
    }

  }

  deleteExpense() {
    this.saving = true;
    this.service.delete(this.expense).subscribe(this.returnBackToDashboard.bind(this));
  }

  returnBackToDashboard() {
    this.dataService.dashboardNeedUpdate();
    this.router.navigateByUrl('/');
  }
}

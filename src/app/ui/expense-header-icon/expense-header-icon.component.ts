import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'expense-header-icon',
  template: `
    <div class="header-icon icons8-pi--matematico" (click)="showExpense()"></div>`
})
export class ExpenseHeaderIconComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showExpense() {
    this.router.navigateByUrl('/expense/new');
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'Briky';
  isMenuOpen: Boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openNavigationMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  addExpense() {
    this.router.navigateByUrl('/expense/add');
  }

}

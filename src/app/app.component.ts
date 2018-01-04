import {Component, OnInit} from '@angular/core';
import {AuthStorage} from "./security/auth.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authStorage: AuthStorage,
    private router: Router) {}


  ngOnInit(): void {
    if(!this.authStorage.isLogged()) {
      this.router.navigateByUrl('/login');
    }
  }
}

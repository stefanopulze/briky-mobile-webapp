import {Component, OnInit} from '@angular/core';
import {AuthStorage} from "../security/auth.storage";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    private auth: AuthStorage,
    private service: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  login() {
    this.service
      .login(this.form.value.email, this.form.value.password)
      .subscribe(response => {
        this.router.navigateByUrl('/')
      });
  }
}

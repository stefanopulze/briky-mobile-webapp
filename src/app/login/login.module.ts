import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}

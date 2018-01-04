import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {appRoutes} from "./app.routes";
import {AuthStorage} from "./security/auth.storage";
import {AuthInterceptor} from "./security/auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {HeaderComponent} from './ui/header/header.component';
import {ExpenseComponent} from './page/expense/expense.component';
import {ExpenseHeaderIconComponent} from './ui/expense-header-icon/expense-header-icon.component';
import {FormsModule} from "@angular/forms";
import {ExpenseService} from "./service/expense.service";
import {StatService} from "./service/stat.service";
import {EuroPipe} from "./pipe/euro.pipe";
import {ExpenceCellComponent} from './ui/expence-cell/expence-cell.component';
import {DataService} from "./service/data.service";
import {TagsComponent} from './page/tags/tags.component';
import {TagService} from "./service/tag.service";
import {TagComponent} from './page/tag/tag.component';
import {environment} from "../environments/environment";
import {ServiceWorkerModule} from "@angular/service-worker";
import { HeaderIconComponent } from './ui/header-icon/header-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ExpenseComponent,
    ExpenseHeaderIconComponent,
    EuroPipe,
    ExpenceCellComponent,
    TagsComponent,
    TagComponent,
    HeaderIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutes,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    //ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  providers: [
    AuthStorage,
    AuthService,
    ExpenseService,
    StatService,
    DataService,
    TagService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

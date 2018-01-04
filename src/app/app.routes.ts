import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {ExpenseComponent} from "./page/expense/expense.component";
import {TagsComponent} from "./page/tags/tags.component";
import {TagComponent} from "./page/tag/tag.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'expense/new', component: ExpenseComponent},
  {path: 'expense/:id', component: ExpenseComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'tag/:id', component: TagComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'}
];

export const appRoutes = RouterModule.forRoot(routes, {useHash: true});

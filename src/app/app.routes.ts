import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

export const routes: Routes = [
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: '', redirectTo: '/list-employee', pathMatch: 'full' }
];

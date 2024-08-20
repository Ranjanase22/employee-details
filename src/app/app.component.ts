import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'details';

  employees: any[] = []; // In-memory storage for employee data

  constructor(private router: Router) {}

  addEmployee(employee: any) {
    this.employees.push(employee);
    this.router.navigate(['/list-employee']); // Navigate to list-employee after adding
  }

  getEmployees() {
    return this.employees; // Method to get employees
  }
}
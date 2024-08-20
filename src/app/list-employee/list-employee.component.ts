import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees: any[] = []; // Array to store employee data

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      // Retrieve employee data from local storage
      this.employees = JSON.parse(localStorage.getItem('employees') || '[]');
      
      // Clear local storage to ensure the list is empty on the next refresh
      localStorage.removeItem('employees');
    } else {
      // Fallback if localStorage is not available
      this.employees = [];
    }
  }
}

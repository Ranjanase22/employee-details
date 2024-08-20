import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;

  @ViewChild('fullNameInput') fullNameInput!: ElementRef;

  constructor() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      skill: new FormControl(''),
      experience: new FormControl('', [Validators.min(0)]),
      proficiency: new FormControl('')
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      if (this.employeeForm.get('fullName')?.invalid) {
        this.fullNameInput.nativeElement.focus();
      }
      this.employeeForm.get('email')?.markAsTouched();
      return;
    }

    // Save employee data to local storage
    let employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.push(this.employeeForm.value);
    localStorage.setItem('employees', JSON.stringify(employees));

    this.employeeForm.reset();
  }
}
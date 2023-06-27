import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee = new Employee();
  showAlert = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  // saveEmployee() {
  //   this.employeeService.createEmployee(this.employee).subscribe((response) => {
  //     console.log(response);
  //     this.showAlert = true;
  //     this.employee = new Employee();
  //   });

  // }

  create(): void {
    const data = {
      id:this.employee.id,
      name: this.employee.name.toLowerCase(),
      surname: this.employee.surname,
      age: this.employee.age,
      phone: this.employee.phone,
      address: this.employee.address,
      status: this.employee.status,
      startDate:this.employee.startDate,
      team: this.employee.team,
      previousIncrease: this.employee.previousIncrease,
      billingRate: this.employee.billingRate,
      timesheet: this.employee.timesheet,
      payment_type: this.employee.payment_type,
      supplier: this.employee.supplier

    };
  }

  saveEmployee(){

    const data = {
      id:this.employee.id,
      name: this.employee.name.toLowerCase(),
      surname: this.employee.surname,
      age: this.employee.age,
      phone: this.employee.phone,
      address: this.employee.address,
      status: this.employee.status,
      startDate:this.employee.startDate,
      team: this.employee.team,
      previousIncrease: this.employee.previousIncrease,
      billingRate: this.employee.billingRate,
      timesheet: this.employee.timesheet,
      payment_type: this.employee.payment_type,
      supplier: this.employee.supplier
    };

    this.employeeService.createEmployee(data)
    .subscribe(response => {
      console.log(response);
      this.showAlert = true;
    },
    error => {
      console.log(error);
    });
  }

}

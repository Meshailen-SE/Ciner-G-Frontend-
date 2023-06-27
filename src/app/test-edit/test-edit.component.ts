import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  
  title = 'employeedashboard';
  searchText=''
  employeeDetails = null as any;
  employeeToUpdate = {
    id:"",
    name:"".toLowerCase(),
    surname:"",
    age:"",
    phone:"",
    address:"",
    status:"",
    startDate:"",
    team:"",
    previousIncrease:"",
    billingRate:"",
    timesheet:"",
    payment_type:"",
    supplier:"",


  }

  constructor(private employeeService: EmployeeService) {
    this.getEmployeesDetails();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  

  register(registerForm: NgForm) {
    this.employeeService.createEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getEmployeesDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  getEmployeesDetails() {
    this.employeeService.getEmployeesList().subscribe(
      (resp) => {
        console.log(resp);
        this.employeeDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteEmployee(employee: any) {
    this.employeeService.deleteEmployee(employee).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmployeesDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(employee: any){
    this.employeeToUpdate = employee;
  }

  reloadPage(){
    window.location.reload();
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

 

}

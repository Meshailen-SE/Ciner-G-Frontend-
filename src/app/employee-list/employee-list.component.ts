import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
// import { WorkerServiceGuard } from '../services/worker-service.guard';
import { EmployeeFilterPipePipe } from '../employee-filter-pipe.pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  url: string = "https://localhost:/8084/api/Employee"
  searchText='';
  
  currentIndex = -1;
  employees!: Employee[];
  currentEmployee: any ;
  employeeToUpdate = {
    id:"",
    name:"",
    age:"",
    phone:"",
    address:"",
    status:"",
    startDate:"",
    team:"",
    previousIncrease:"",
    billingRate:"",

  }

  employee!: Object;
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe((response: Employee[]) => {
      this.employees = response;
    });
  }

  refreshList(): void {
    this.getEmployeesList();
    this.currentEmployee = {};
    this.currentIndex = -1;
  }

  setCurrentEmployee(Employee: Employee, index: any): void {
    this.currentEmployee = this.employee;
    this.currentIndex = index;
  }


  getEmployeesList() {
    throw new Error('Method not implemented.');
  }

  readEmployee(): void {
    this.employeeService.getEmployeesList()
      .subscribe(
        data => {
          this.employee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  deleteEmployee(id:any): void {
    this.employeeService.deleteEmployee(id)
    .subscribe((response) => {
      console.log(response);
      this.refreshList;
      this.employees = this.employees.filter(s => {
        return s.id != id;
      });
    });
  }
  edit(employee:any){
    this.employeeToUpdate = employee;
  }
  
  updateEmployee(id: number){
    this.router.navigate(['testupdateEmployeeform', id]);
  }


}

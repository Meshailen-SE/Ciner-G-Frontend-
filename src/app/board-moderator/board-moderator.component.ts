import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
// import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { NgForm } from '@angular/forms';
// import {}


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
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
  content?: any;
  constructor(private userService: UserService,private employeeService: EmployeeService) { 
    this.getEmployeesDetails();
  }
      
  // ngOnInit(): void {

  //   this.userService.getModeratorBoard()
  //   .subscribe(
  //     data=> {
  //       this.content =data;
  //     },
  //     err => {
  //       this.content =JSON.parse(err.error).message;
  //     }
  //   )
  // }
  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
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


  // getEmployeesDetails() {
  //   this.employeeService.getEmployeesList().subscribe(
  //     (resp) => {
  //       console.log(resp);
  //       this.employeeDetails = resp;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  // ngOnInit(): void {
  //   this.userService.getModeratorBoard().subscribe({
  //     next: data => {
  //       this.content = data;
  //     },
  //     error: err => {console.log(err)
  //       if (err.error) {
  //         this.content = JSON.parse(err.error).message;
  //       } else {
  //         this.content = "Error with status: " + err.status;
  //       }
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   this.userService.getModeratorBoard().subscribe({
  //     next: data => {
  //       this.content = data;
  //     },
  //     error: err => {
  //       if (err.error) {
  //         try {
  //           const res = JSON.parse(err.error);
  //           this.content = res.message;
  //         } catch {
  //           this.content = `Error with status: ${err.status} - ${err.statusText}`;
  //         }
  //       } else {
  //         this.content = `Error with status: ${err.status}`;
  //       }
  //     }
  //   });
  // }
}

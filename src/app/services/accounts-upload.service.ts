import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';

// http://localhost:8084/
const AUTH_API = 'http://localhost:8084/api/auth';
@Injectable({
  providedIn: 'root'
})

export class AccountsUploadService {
  // baseUrl = environment.API_BASE_URL;
  // const baseUrl = 'http://localhost:8084/api/auth';
  // const AUTH_API = 'http://localhost:8084/api/auth';
  employeeDetails = null as any;
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
  constructor(private http: HttpClient,private employeeService: EmployeeService) { 
    this.getEmployeesDetails();
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

  upload(addendum: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('addendum', addendum);

    const req = new HttpRequest("POST", AUTH_API+"/uploadAddendum", formData, {
      
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(AUTH_API+"/addendums/");
  }
}

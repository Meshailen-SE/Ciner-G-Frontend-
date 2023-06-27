import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

const baseUrl = 'http://localhost:8084/api';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private isMobileResolution!: boolean;
  // baseUrl = environment.API_BASE_URL;
  constructor(private http: HttpClient,private router:Router) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    
   }

   public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
  //Crud

  //Save
  // saveEmployeeData(employee:any): Observable<any>{
  //   console.log(employee);
  //    return this.http.put(this.baseUrl +"/updateEmployeeform/",employee);
  // }
  //get by ID

  // getEmployeeById(id:any): Observable<any>{
  //    return this.http.get(this.baseUrl+"/updateEmployeeform/"+id);
  // }



  //Create
  createEmployee(employee: Employee): Observable<any>{
    return this.http.post(baseUrl + "/createEmployee", employee);
  }

  //Read ID
  getEmployee(employee: any): Observable<any> {
    // return this.http.get(this.baseUrl + "/Employee/" +id);
    return this.http.get(baseUrl + "/Employee/", employee);
  }

  // getOne(id: any):Observable<any>{
  //   return this.http.get(this.baseUrl + "/Employee/"+id)
  // }

  //read by id
  getEmployeeById(id: any): Observable<any>{
    return this.http.get<Employee>(baseUrl+"/Employee/"+ id);
  }

  //Read ALl
  getEmployeesList(): Observable<any> {
    return this.http.get(baseUrl + "/Employee");
  }

  //Update
  updateEmployee(employee:any): Observable<any> {
    return this.http.put(baseUrl + "/testupdateEmployeeform/", employee);
  }
  //Delete
  deleteEmployee(id:any): Observable<any> {
    return this.http.delete(baseUrl + "/delete/" + id);
  }

  //login
  IsLoggedIn(){
    return localStorage.getItem("username")!=null
  }
  
  HaveRoleAccess(menuname:any){
    const role = localStorage.getItem("role");
    if(role=='admin'){
      return true;
    }else{
      if (menuname == 'Employee'){
        return true;
      }else{
        return false;

      }
      
    }
  }

  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw new Error("");
    
    // return Observable.throw(error.message || "Server Error");
  // }
  // updateEmployee(employee: Employee) {
  //   return this.http.put(this.baseUrl + "/updateEmployeeform/", employee);
  // }
  
  

  
}

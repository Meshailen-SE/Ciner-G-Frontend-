// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class WorkerServiceGuard implements CanActivate {

//   // baseUrl = environment.API_BASE_URL;
//   constructor(private http: HttpClient,private router:Router) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

//   //crud
//   //Create
//   createWorker(worker: Worker): Observable<any>{
//     return this.http.post(this.baseUrl + "/createWorker", worker);
//   }

//   //Read ID
//   getWorker(id:any): Observable<any> {
//     return this.http.get(this.baseUrl + "/Worker/" + id);
//   }

//   //Read ALl
//   getWorkersList(): Observable<any> {
//     return this.http.get(this.baseUrl + "/Worker");
//   }

//   //Update
//   updateWorker( worker: any): Observable<any> {
//     return this.http.put(this.baseUrl + "/updateWorkerform", worker);
//   }
//   //Delete
//   deleteWorker(id:any): Observable<any> {
//     return this.http.delete(this.baseUrl + "/delete/" + id);
//   }

// }

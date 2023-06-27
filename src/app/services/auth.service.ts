import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { environment } from 'src/environments/environment';


// const AUTH_API = 'http://localhost:8084/api/auth';
// const AUTH_API = 'http://localhost:8084/api/auth';
// baseUrl = environment.API_BASE_URL;
// const this.API_BASE_URL = 'http://localhost:8084/api/auth';
const API_BASE_URL = 'http://localhost:8084/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = API_BASE_URL;
  constructor(private http: HttpClient,private router: Router) {}
  // baseUrl = environment.API_BASE_URL;
  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signin',
  //     {
  //       username,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  login(credentials:any): Observable<any> {
    return this.http.post(this.baseUrl+"/auth/signin", {
      username: credentials.username,
      password: credentials.password});
    // },httpOptions);
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401, error.status == 403 ) {
          this.router.navigate([this.baseUrl+"/auth/login"]);
        }
        return throwError(error);
      })
    );
  }

  register(user:any): Observable<any> {
    return this.http.post(this.baseUrl+"/auth/signup", {
      username :user.username,
      email: user.email,
      password: user.password});
    // },httpOptions);
  //     AUTH_API + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + "/auth/signout", { }, httpOptions);
  }
}
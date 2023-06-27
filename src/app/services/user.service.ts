import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8084/api/test';
const AUTH_API = 'http://localhost:8084/api/test';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    // return this.http.get(API_URL + "/all", { responseType: 'text' });
    return this.http.get(AUTH_API + "/all", { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(AUTH_API + "/user", { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(AUTH_API + "/mod", { responseType: 'text' },);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(AUTH_API + "/admin", { responseType: 'text' });
  }
}
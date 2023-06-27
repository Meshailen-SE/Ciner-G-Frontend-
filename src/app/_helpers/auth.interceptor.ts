import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event.class';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

// import { EventBusService } from '../shared/event-bus.service';
// import { EventData } from '../shared/event.class';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private route:Router,private storageService: StorageService, private eventBusService: EventBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }

  // private catchErrors() {
  //   return (res: Response) => {
  //     if (res.status === 401 || res.status === 403) {
  //       //handle authorization errors
  //       //in this example I am navigating to logout route which brings the login screen
  //       this.route.navigate(['logout']);
  //     }
  //     return Observable.throw(res);
  //   };
  // }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
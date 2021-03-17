import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterceptService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.indexOf('api')>-1){
     let bearer_token = sessionStorage.getItem('access_token');
     let jsonReq = req.clone({
      setHeaders : {
        'content-type' : 'application/json ',
        'Authorization' : 'Bearer ' + bearer_token
      }
    });

     return  next.handle(jsonReq);

  }

    return  next.handle(req);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../config/AppConstants';
import { signup } from '../model/signup';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

getUser(): Observable<user>{
  const url = AppConstants.endpoint + AppConstants.signin;
  return this.http.get<user>(url);
}

createUser(signupform: signup): Observable<user>{
  const url = AppConstants.endpoint + AppConstants.signup;
  return this.http.post<user>(url, signupform);
}

}

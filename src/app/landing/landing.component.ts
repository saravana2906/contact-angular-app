import { Component, OnInit } from '@angular/core';
import { OAuthEvent } from 'angular-oauth2-oidc';
import { Observable, ObservableInput } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { signup } from '../model/signup';
import { user } from '../model/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public isSignupCompleted = false;

  constructor( private authservice: AuthService, private userService: UserService) {

   }

  ngOnInit(): void {
    if((sessionStorage.getItem('nonce') || '').length>0 && (sessionStorage.getItem('access_token')|| '').length<1){
      this.authservice.intiateLogin();
    }
  }

  intiateSignUp(): void {

console.log('In landing intiate login');
this.authservice.intiateLogin();
console.log('COmpleting landing intiate login');


    /* .pipe(filter(e => e.type === 'token_received'))
    .subscribe(r1 => {this.authservice.loadingProfile();
                      console.log("Inside subscribe");
                      const loginuser: signup = new signup();
                      loginuser.name = sessionStorage.getItem('name');
                      loginuser.emailId = sessionStorage.getItem('email');
                      loginuser.phoneNumber = sessionStorage.getItem('phoneNumber');
                      this.userService.createUser(loginuser).subscribe(
        data => { console.log(data); });
  }); */
}


}

import { Injectable } from '@angular/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from '../authConfig';
import { Router } from '@angular/router';
import { signup } from '../model/signup';
import { user as loginuser } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private oauthService: OAuthService , private userService : UserService ) {  
    console.log('Authservice constructor');
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.events.subscribe(({ type }: OAuthEvent) => {
      console.log('Type ', type);
      if(type === 'token_received'){
        this.loadingProfile();
        const signupuser: signup = new signup();
        const tokenString = sessionStorage.getItem('id_token_claims_obj');
        const tokenObject = JSON.parse(tokenString || '{}');
        signupuser.name = tokenObject.name;
        signupuser.emailId = tokenObject.email;
        signupuser.phoneNumber = tokenObject.phoneno;
        console.log(signupuser);
        this.userService.createUser(signupuser).subscribe(
  data => { console.log('result after signup ',data); });

      }
    });
   }

   get userName(): string {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) { return ''; }
    return claims.given_name;
  }

  get emailId(): string {
    const claims: any = this.oauthService.getIdentityClaims();
    return claims.email;
  }

  get roles(): string[] {
    const claims: any = this.oauthService.getIdentityClaims();
    return claims['approles'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh(): void {
    this.oauthService.refreshToken();
  }

  public loadingProfile(): void{
    this.oauthService.loadUserProfile();
  }

  public intiateLogin(): void{
    console.log('Configuring and load Discovery Document And Login');
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
   /* this.oauthService.tryLoginCodeFlow({
      onTokenReceived: context => {
          console.log('logged in');
          console.log(context);
      }
  });*/
   // this.oauthService.initLoginFlow();
  }

}

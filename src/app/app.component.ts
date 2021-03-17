import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './authConfig';
import { filter } from 'rxjs/operators';
import { UserService } from './core/user.service';
import { user } from './model/user';
import { signup } from './model/signup';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-app';
  public user : user
  constructor() {
    
  }
}

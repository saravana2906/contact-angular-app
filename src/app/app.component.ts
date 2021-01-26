import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './authConfig';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-app';
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();

    // this.oauthService.setupAutomaticSilentRefresh();

    // Automatically load user profile
    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(_ => this.oauthService.loadUserProfile());
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
    return claims['user-roles'];
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

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AboutComponent } from './about/about.component';
import { TokeninterceptService } from './core/tokenintercept.service';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewContactsComponent,
    EditContactComponent,
    ViewProfileComponent,
    AboutComponent,
    HomeComponent,
    LandingComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : TokeninterceptService , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

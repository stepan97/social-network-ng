import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {AuthenticationRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthenticationRoutingModule,
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }

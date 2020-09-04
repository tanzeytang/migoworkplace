import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import {  LoginRoutingModule  } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent,
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ],
  exports:[
    LoginRoutingModule,
    LoginComponent, 
    RegisterComponent,
    SharedModule,
  ]
})
export class LoginModule { }
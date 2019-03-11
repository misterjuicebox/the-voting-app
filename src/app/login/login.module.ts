import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

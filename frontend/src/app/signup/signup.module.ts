import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [SignupComponent, ConfirmationComponent],
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }

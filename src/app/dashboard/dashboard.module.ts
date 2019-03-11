import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

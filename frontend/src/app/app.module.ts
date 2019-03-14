import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {ProposalService} from './services/proposal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiModule
  ],
  exports: [
    AppComponent
  ],
  providers: [
    AuthService,
    ProposalService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

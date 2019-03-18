import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {ProposalService} from './services/proposal.service';
import {VoterGroupService} from './services/voterGroup.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    VoterGroupService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

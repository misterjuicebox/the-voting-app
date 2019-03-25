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
import {VoteService} from './services/vote.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {VoterGroupComponent} from './voter-group/voter-group.component';
import {CreateProposalComponent} from './proposal/create-proposal/create-proposal.component';
import {ProposalComponent} from './proposal/proposal.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConfirmationComponent} from './signup/confirmation/confirmation.component';
import {SignupComponent} from './signup/signup.component';
import {CreateVoterGroupComponent} from './voter-group/create-voter-group/create-voter-group.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationComponent,
    DashboardComponent,
    VoterGroupComponent,
    CreateVoterGroupComponent,
    ProposalComponent,
    CreateProposalComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiModule,
  ],
  exports: [
    AppComponent
  ],
  providers: [
    AuthService,
    ProposalService,
    VoterGroupService,
    VoteService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

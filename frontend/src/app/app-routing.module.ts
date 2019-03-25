import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ConfirmationComponent} from './signup/confirmation/confirmation.component';
import {VoterGroupComponent} from './voter-group/voter-group.component';
import {CreateVoterGroupComponent} from './voter-group/create-voter-group/create-voter-group.component';
import {ProposalComponent} from './proposal/proposal.component';
import {CreateProposalComponent} from './proposal/create-proposal/create-proposal.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './../app/home/home.module#HomeModule'},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/confirmation', component: ConfirmationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'voter-group', component: VoterGroupComponent, canActivate: [AuthGuard]},
  {path: 'voter-group/create', component: CreateVoterGroupComponent, canActivate: [AuthGuard]},
  {path: 'proposal', component: ProposalComponent, canActivate: [AuthGuard]},
  {path: 'proposal/create', component: CreateProposalComponent, canActivate: [AuthGuard]},
  {path: 'proposal/:proposalId/:voterGroupId', component: ProposalComponent, canActivate: [AuthGuard]},


  // {path: 'signup', loadChildren: './../app/signup/signup.module#SignupModule'},
  // {path: 'login', loadChildren: './../app/login/login.module#LoginModule'},
  // {path: 'dashboard', loadChildren: './../app/dashboard/dashboard.module#DashboardModule'},
  // {path: 'voter-group', loadChildren: './../app/voter-group/voter-group.module#VoterGroupModule'},
  // {path: 'proposal', loadChildren: './../app/proposal/proposal.module#ProposalModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

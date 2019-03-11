import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'signup', loadChildren: './../app/signup/signup.module#SignupModule'},
  {path: 'login', loadChildren: './../app/login/login.module#LoginModule'},
  {path: 'dashboard', loadChildren: './../app/dashboard/dashboard.module#DashboardModule'},
  {path: 'voter-group', loadChildren: './../app/voter-group/voter-group.module#VoterGroupModule'},
  {path: 'proposal', loadChildren: './../app/proposal/proposal.module#ProposalModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

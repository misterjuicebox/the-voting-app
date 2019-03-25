import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProposalComponent} from './proposal.component';
import {CreateProposalComponent} from './create-proposal/create-proposal.component';

const routes: Routes = [
    {path: '', component: ProposalComponent},
    {path: 'create', component: CreateProposalComponent},
    {path: ':proposalId/:voterGroupId', component: ProposalComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProposalRoutingModule {
}

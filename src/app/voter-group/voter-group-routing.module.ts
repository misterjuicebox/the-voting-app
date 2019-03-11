import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoterGroupComponent} from './voter-group.component';
import {CreateVoterGroupComponent} from './create-voter-group/create-voter-group.component';

const routes: Routes = [
    {path: '', component: VoterGroupComponent},
    {path: 'create', component: CreateVoterGroupComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoterGroupRoutingModule {
}

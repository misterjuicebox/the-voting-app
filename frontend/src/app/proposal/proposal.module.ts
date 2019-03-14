import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal.component';
import {ProposalRoutingModule} from './proposal-routing.module';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';

@NgModule({
  declarations: [ProposalComponent, CreateProposalComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VoterGroupComponent } from './voter-group.component';
import {VoterGroupRoutingModule} from './voter-group-routing.module';
import { CreateVoterGroupComponent } from './create-voter-group/create-voter-group.component';

@NgModule({
  declarations: [VoterGroupComponent, CreateVoterGroupComponent],
  imports: [
    FormsModule,
    CommonModule,
    VoterGroupRoutingModule
  ]
})
export class VoterGroupModule { }

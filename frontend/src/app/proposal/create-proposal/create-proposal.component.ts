import { Component, OnInit } from '@angular/core';
import {ProposalService} from '../../services/proposal.service';
import {VoterGroupService} from '../../services/voterGroup.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {

  voterGroups: any = [];
  proposal: any = {};

  constructor(private proposalService: ProposalService,
              private voterGroupService: VoterGroupService) { }

  ngOnInit() {
    this.getVoterGroups();
  }

  getVoterGroups() {
    this.voterGroupService.getVoterGroups()
      .subscribe(result => {
        this.voterGroups = result;
        console.log(result)
      });
  }

  createProposal(proposal: any) {
    this.proposal;
    console.log(proposal);
    console.log(this.proposal);
    // this.proposalService.createProposal(params)
  }

}

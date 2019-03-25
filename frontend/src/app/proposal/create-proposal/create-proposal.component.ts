import { Component, OnInit } from '@angular/core';
import {ProposalService} from '../../services/proposal.service';
import {VoterGroupService} from '../../services/voterGroup.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  userInfo: any = {};
  voterGroups: any = [];
  proposal: any = {};

  constructor(private proposalService: ProposalService,
              private voterGroupService: VoterGroupService,
              private authService: AuthService) { }


  ngOnInit() {
    this.authService.getCognitoUserInfo()
      .subscribe(result => {
        this.userInfo = result;
        console.log(this.userInfo);
        this.getVoterGroups({email: this.userInfo.attributes.email});
      })
  }

  getVoterGroups(params) {
    this.voterGroupService.getVoterGroups(params)
      .subscribe(result => {
        this.voterGroups = result;
        console.log(result)
      });
  }

  createProposal(proposal: any) {
    let params = {title: proposal.title, description: proposal.description, voterGroupId: proposal.voterGroupId};
    this.proposalService.createProposal(params)
      .subscribe(result => {
        if (result.pk) {
          this.addProposalToGroup(result.pk);
        }
        console.log(result)
      });
  }

  addProposalToGroup(proposalId) {
    let params = {
      proposalId: proposalId,
      voterGroupId: this.proposal.voterGroupId
    };
    this.proposalService.addProposalToGroup(params)
      .subscribe(result => {
        console.log(result);
      })
  }

}

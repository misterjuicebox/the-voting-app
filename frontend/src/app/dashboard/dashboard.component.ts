import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../services/voterGroup.service';
import {ProposalService} from '../services/proposal.service';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  voterGroups: any = [];
  proposals: any = [];
  userInfo: any = {};

  busy = true;

  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService,
              private proposalService: ProposalService,
              private router: Router) { }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo();
    this.getVoterGroups({email: this.userInfo.email});
  }

  getVoterGroups(params) {
    this.voterGroupService.getVoterGroups(params)
      .subscribe(result => {
        if (result.length > 0) {
          this.voterGroups = result;
          this.getProposals();
        } else {
          this.busy = false;
        }
      }, error => {
        // todo handle error
        this.busy = false;
        console.log(error);
      });
  }

  getProposals() {
    const voterGroupIds = []
    for (let group of this.voterGroups) {
      voterGroupIds.push(group.pk);
    }
    const params = {
      voterGroupIds: voterGroupIds
    };
    this.proposalService.getProposals(params)
      .subscribe(result => {
        if (result.length > 0) {
          this.proposals = result;
        }
        this.busy = false;
      }, error => {
        // todo handle error
        console.log(error)
        this.busy = false;
      });
  }

  viewVoterGroup(voterGroup: any) {
    this.voterGroupService.selectedVoterGroup = voterGroup;
    this.router.navigate(['/voter-group']);
  }

  viewProposal(proposal: any) {
    this.proposalService.selectedProposal = proposal;
    this.router.navigate(['/proposal/' + proposal.pk + '/' + proposal.voterGroupId]);
  }

  createVoterGroup() {
    this.router.navigate(['/voter-group/create']);
  }

  createProposal() {
    this.router.navigate(['/proposal/create']);
  }

}

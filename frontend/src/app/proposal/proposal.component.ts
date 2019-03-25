import { Component, OnInit } from '@angular/core';
import {ProposalService} from '../services/proposal.service';
import {ActivatedRoute, Params} from "@angular/router";
import {AuthService} from '../services/auth.service';
import {VoteService} from '../services/vote.service';
import {UtilitiesService} from '../services/utilities.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  proposal: any = {};
  userInfo: any = {};

  vote: any = {};

  isEmpty = UtilitiesService.isEmpty;

  constructor(private proposalService: ProposalService,
              private route: ActivatedRoute,
              private voteService: VoteService,
              private authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo();

    if (this.proposalService.selectedProposal.pk) {
      this.proposal = this.proposalService.selectedProposal;
      this.getVote();
    } else {
      this.getProposalParams();
    }
  }

  getProposalParams() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const proposalParams = {
        proposalId: params.proposalId,
        voterGroupId: params.voterGroupId,
        email: this.userInfo.email
      };
      this.getProposal(proposalParams);
    });
  }

  getProposal(params) {
    this.proposalService.getProposal(params)
      .subscribe(result => {
        this.proposal = result;
        this.getVote();
      });
  }

  getVote() {
    const params = {
      email: this.userInfo.email,
      proposalId: this.proposal.pk
    }
    this.voteService.getVote(params)
      .subscribe(result => {
        if (!this.isEmpty(result.pk)) {
          this.vote = result;
        }
      });
  }
  castVote(vote) {
    const params = {
      email: this.userInfo.attributes.email,
      proposalId: this.proposal.pk,
      voterGroupId: this.proposal.voterGroupId,
      vote: vote
    };
    this.voteService.castVote(params)
      .subscribe(result => {
        if (result.sk) {
          this.vote = result;
        }
        console.log(result)
      });
  }
}

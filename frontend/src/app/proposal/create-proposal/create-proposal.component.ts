import { Component, OnInit } from '@angular/core';
import {ProposalService} from '../../services/proposal.service';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
  }

  createProposal() {
    this.proposalService.createProposal(params)
  }

}

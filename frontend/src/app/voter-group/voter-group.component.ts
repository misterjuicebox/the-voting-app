import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../services/voterGroup.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-voter-group',
  templateUrl: './voter-group.component.html',
  styleUrls: ['./voter-group.component.css']
})
export class VoterGroupComponent implements OnInit {

  voterGroup: any = {};
  newVoter: any = {};
  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService) { }

  ngOnInit() {
    this.voterGroup = this.voterGroupService.selectedVoterGroup;
  }

  inviteUser(newVoter: any) {
    this.authService.getUser({email: newVoter.email})
      .subscribe(result => {
        let params = {
          email: newVoter.email,
          voterGroupId: this.voterGroup.pk,
        };
        this.addVoterToGroup(params);
      })
  }

  addVoterToGroup(params: any) {
    this.voterGroupService.addVoterToGroup(params)
      .subscribe(result => {
        console.log(result);
      })
  }

  updateVoterGroup(params: any) {
    this.voterGroupService.updateVoterGroup(params)
      .subscribe(result => {
        console.log(result);
      })
  }

}

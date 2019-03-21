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
    console.log(this.voterGroup);
    debugger;
  }

  inviteUser(newVoter: any) {
    console.log(newVoter);
    this.authService.getUser({email: newVoter.email})
      .subscribe(result => {
        console.log(result);
        let params = {
          userId: result.userId,
          voterGroupId: this.voterGroup.voterGroupId,
          name: this.voterGroup.name,
          description: this.voterGroup.description
        }
        this.addVoterToGroup(params);
      })
  }

  addVoterToGroup(params: any) {
    this.voterGroupService.addVoterToGroup(params)
      .subscribe(result => {
        console.log(result);
      })
  }

}

import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../../services/voterGroup.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-create-voter-group',
  templateUrl: './create-voter-group.component.html',
  styleUrls: ['./create-voter-group.component.css']
})
export class CreateVoterGroupComponent implements OnInit {

  addVoter: boolean;

  userInfo: any = {};
  voterGroup: any = {};

  email: string = '';

  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getCognitoUserInfo();
  }

  getCognitoUserInfo() {
    this.userInfo = this.authService.getUserInfo();
  }

  createVoterGroup(voterGroup: any) {
    let params = {title: voterGroup.title, description: voterGroup.description};
    this.voterGroupService.createVoterGroup(params)
      .subscribe(result => {
        if (result.pk) {
          this.addVoterToGroup(result.pk);
        }
    });
  }

  addVoterToGroup(voterGroupId) {
    let params = {
      email: this.userInfo.email,
      voterGroupId: voterGroupId
    };
    this.voterGroupService.addVoterToGroup(params)
      .subscribe(result => {
      })
  }

}

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

  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getCognitoUserInfo();
  }

  getCognitoUserInfo() {
    this.authService.getCognitoUserInfo()
      .subscribe(result => {
        this.userInfo = result;
        console.log(this.userInfo);
      })
  }

  createVoterGroup(voterGroup: any) {
    let params = {userId: this.userInfo.username, name: voterGroup.name, description: voterGroup.description};
    debugger;
    this.voterGroupService.createVoterGroup(params)
      .subscribe(result => {
        if (result.voterGroupId) {
          let params = {voterGroupId: result.voterGroupId};
          // this.voterGroupService.createUserVoterGroup(params)
          //   .subscribe(result => {
          //     // redirect to somewhere...
          //     console.log(result)});
        }
        console.log(result)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../services/voterGroup.service';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  voterGroups: any = [];
  userInfo: any = {};

  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.getCognitoUserInfo()
      .subscribe(result => {
        this.userInfo = result;
        console.log(this.userInfo);
        this.getVoterGroups({userId: this.userInfo.username});
      })
  }

  getVoterGroups(params) {
    this.voterGroupService.getVoterGroups(params)
      .subscribe(result => {
        this.voterGroups = result;
        console.log(result)
      });
  }

  viewVoterGroup(voterGroup: any) {
    this.voterGroupService.selectedVoterGroup = voterGroup;
    debugger;
    this.router.navigate(['/voter-group']);
  }

}

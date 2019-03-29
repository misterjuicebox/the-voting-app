import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../services/voterGroup.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-voter-group',
  templateUrl: './voter-group.component.html',
  styleUrls: ['./voter-group.component.css']
})
export class VoterGroupComponent implements OnInit {

  voterGroup: any = {};
  newVoter: any = {};
  busy = false;
  error = false;

  userInfo: any = {};

  constructor(private voterGroupService: VoterGroupService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo();

    if (this.voterGroupService.selectedVoterGroup.pk) {
      this.voterGroup = this.voterGroupService.selectedVoterGroup;
    } else {
      this.busy = true;
      this.getVoterGroupParams();
    }
  }

  reset() {
    this.error = false;
  }

  getVoterGroupParams() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const voterGroupParams = {
        voterGroupId: params.voterGroupId,
        email: this.userInfo.email
      };
      this.getVoterGroup(voterGroupParams);
    });
  }

  getVoterGroup(params) {
    this.voterGroupService.getVoterGroup(params)
      .subscribe(result => {
        this.voterGroup = result;
        this.busy = false;
      }, error => {
        this.busy = false;
        this.error = true;
      });
  }

  inviteUser(newVoter: any) {
    this.reset();
    this.busy = true;
    this.authService.getUser({email: newVoter.email})
      .subscribe(result => {
        let params = {
          email: newVoter.email,
          voterGroupId: this.voterGroup.pk,
        };
        this.addVoterToGroup(params);
      }, error => {
        this.error = true;
        this.busy = false;
      })
  }

  addVoterToGroup(params: any) {
    this.voterGroupService.addVoterToGroup(params)
      .subscribe(result => {
        this.busy = false;
        this.newVoter = {};
      }, errror => {
        this.error = true;
        this.busy = false;
      })
  }

  updateVoterGroup(params: any) {
    this.voterGroupService.updateVoterGroup(params)
      .subscribe(result => {

      })
  }

}

import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../../services/voterGroup.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

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

  busy = false;
  error = false;

  constructor(private voterGroupService: VoterGroupService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo();
  }

  reset() {
    this.error = false;
  }

  createVoterGroup(voterGroup: any) {
    this.busy = true;
    this.reset();
    let params = {title: voterGroup.title, description: voterGroup.description};
    this.voterGroupService.createVoterGroup(params)
      .subscribe(result => {
        if (result.pk) {
          this.addVoterToGroup(result.pk);
        } else {
          this.error = true;
          this.busy = false;
        }
    }, error => {
        this.busy = false;
        this.error = true;
      });
  }

  addVoterToGroup(voterGroupId) {
    let params = {
      email: this.userInfo.email,
      voterGroupId: voterGroupId
    };
    this.voterGroupService.addVoterToGroup(params)
      .subscribe(result => {
        this.router.navigate(['/dashboard']);
      }, error => {
        this.busy = false;
        this.error = true;
      })
  }

}

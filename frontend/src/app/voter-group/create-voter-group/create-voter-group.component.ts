import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../../services/voterGroup.service';

@Component({
  selector: 'app-create-voter-group',
  templateUrl: './create-voter-group.component.html',
  styleUrls: ['./create-voter-group.component.css']
})
export class CreateVoterGroupComponent implements OnInit {

  addVoter: boolean;

  voterGroup: any = {};

  constructor(private voterGroupService: VoterGroupService) { }

  ngOnInit() {
  }

  createVoterGroup(voterGroup: any) {
    let params = {name: voterGroup.name, description: voterGroup.description};
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

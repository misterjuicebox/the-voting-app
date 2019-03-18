import { Component, OnInit } from '@angular/core';
import {VoterGroupService} from '../services/voterGroup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private voterGroupService: VoterGroupService) { }

  ngOnInit() {
    this.getVoterGroups();
  }

  getVoterGroups() {
    this.voterGroupService.getVoterGroups()
      .subscribe(result => {
        console.log(result)
      });
  }

}

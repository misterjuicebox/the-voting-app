import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UtilitiesService} from '../../services/utilities.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() user: any = {};

  busy = false;
  
  isEmpty = UtilitiesService.isEmpty;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(user: any) {
    const email = user.email;
    const code = user.code;
    const password = user.password;

    this.authService.confirmSignUp(email, code)
      .subscribe(result => {
          if (result === 'SUCCESS') {
            this.signIn(email, password);
          }
        }, error => {
          console.log(error);
        }
    );
  }

  signIn(email, password) {
    this.authService.signIn(email, password)
      .subscribe(result => {
        if (!this.isEmpty(result.userDataKey)) {
          this.getUserInfo();
        } else {
          this.busy = false;
        }
      }, error => {
        // todo handle error
        console.log(error);
        this.busy = false;
      })
  }

  getUserInfo() {
    this.authService.getCognitoUserInfo()
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/dashboard']);
        } else {
          this.busy = false;
        }
      }, error => {
        // todo handle error
        console.log(error);
        this.busy = false;
      })
  }
}

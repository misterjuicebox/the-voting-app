import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UtilitiesService} from '../services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  busy = false;
  error = false;

  isEmpty = UtilitiesService.isEmpty;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  reset() {
    this.error = false;
  }

  login(user: any) {
    this.busy = true;
    this.reset();

    this.authService.signIn(user.email, user.password)
      .subscribe(result => {
        if (!this.isEmpty(result.userDataKey)) {
          this.getUserInfo();
        } else {
          this.error = true;
          this.busy = false;
        }
      }, error => {
          this.error = true;
          this.busy = false;
        })
  }

  getUserInfo() {
    this.authService.getCognitoUserInfo()
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/dashboard']);
        } else {
          this.error = true;
          this.busy = false;
        }
      }, error => {
        this.error = true;
        this.busy = false;
      })
  }

}

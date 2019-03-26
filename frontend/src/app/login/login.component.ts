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

  isEmpty = UtilitiesService.isEmpty;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(user: any) {
    this.busy = true;

    this.authService.signIn(user.email, user.password)
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

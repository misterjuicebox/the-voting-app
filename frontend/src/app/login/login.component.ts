import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(user: any) {
    debugger;
    this.authService.signIn(user.email, user.password).subscribe(result => {
      this.authService.getCognitoUserInfo();
    })
  }

}

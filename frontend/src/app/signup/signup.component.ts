import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};
  error = false;
  busy = false;

  showConfirmation: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  reset() {
    this.error = false;
  }

  submit(user: any) {
    this.busy = true;
    this.reset();
    const email = user.email;
    const password = user.password;
    const firstName = user.firstName;
    const lastName = user.lastName;

    let params = {
      username: email,
      password: password,
      attributes: {
        'custom:firstName': firstName,
        'custom:lastName': lastName
      }
    };

    this.authService.signUp(params)
      .subscribe(result => {
        this.showConfirmation = true;
        this.busy = false;
      }, error => {
        this.busy = false;
        this.error = true;
    });
  }
}

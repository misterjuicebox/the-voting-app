import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};

  showConfirmation: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(user: any) {
    const email = user.email;
    const password = user.password;
    this.authService.signUp(email, password).subscribe(result => {
      debugger;
      this.showConfirmation = true;
      console.log(result)
    },
      error => {
        console.log(error);
      });
  }
}

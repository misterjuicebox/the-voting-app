import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

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
    debugger;
    const email = user.email, password = user.password;
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

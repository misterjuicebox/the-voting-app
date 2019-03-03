import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(user: any) {
    const email = user.email, code = user.code;
    this.authService.confirmSignUp(email, code).subscribe(result => {
        debugger;
        console.log(result)
      },
      error => {
        console.log(error);
      });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "../../auth.service";
import {Observable} from "rxjs";
import 'rxjs/add/observable/forkJoin';
import { Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() user: any = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(user: any) {
    const email = user.email, code = user.code, password = user.password;
    let authRequests = [];

    authRequests.push(this.authService.confirmSignUp(email, code));
    authRequests.push(this.authService.signIn(email, password));

    Observable.forkJoin(authRequests).subscribe(result => {
      console.log(result)
      if (result[0] === 'SUCCESS' && this.authService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
      debugger;
    })
    // this.authService.confirmSignUp(email, code).subscribe(result => {
    //     debugger;
    //     this.authService.signIn(email, password).subscribe(result => {
    //       debugger;
    //       console.log(result)
    //     })
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }
}

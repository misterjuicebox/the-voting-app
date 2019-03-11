import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() user: any = {};

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.confirmSignUp(params);
    });
  }

    confirmSignUp(params: any) {
        this.authService.confirmSignUp(params.username, params.code).subscribe(result => {
          console.log(result);
    });
  }

  submit(user: any) {
    const email = user.email;
    const code = user.code;
    const password = user.password;
    const authRequests = [];

    authRequests.push(this.authService.confirmSignUp(email, code));
    authRequests.push(this.authService.signIn(email, password));

    Observable.forkJoin(authRequests).subscribe(result => {
      console.log(result)
      if (result[0] === 'SUCCESS' && this.authService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
    });
  }
}

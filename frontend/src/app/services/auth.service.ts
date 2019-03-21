import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { fromPromise} from "rxjs/internal-compatibility";
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import Amplify, { Auth, API } from 'aws-amplify';
import { environment} from "../../environments/environment";
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  private API_URL = 'https://ril7jqatdc.execute-api.us-east-1.amazonaws.com/dev';


  constructor(private router: Router) {
    // Amplify.configure({
    //   mandatorySignIn: true,
    //   region: environment.cognito.REGION,
    //   userPoolId: environment.cognito.USER_POOL_ID,
    //   identityPoolId: environment.cognito.IDENTITY_POOL_ID,
    //   userPoolWebClientId: environment.cognito.APP_CLIENT_ID
    // });

    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  /** signup */
  public signUp(params): Observable<any> {
    return fromPromise(Auth.signUp(params));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** signin */
  public signIn(email, password): Observable<any> {
    debugger;
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => {
          debugger;
          // console.log('logged in');
          this.loggedIn.next(true);
          // this.getCognitoUserInfo();
        })
      );
  }

  public getCognitoUserInfo() {
    debugger;
    return fromPromise(Auth.currentUserInfo());
      // .subscribe(
      //   result => {
      //     console.log(result);
      //   },
      //   error => console.log(error)
      // );
  }
  public getUser(params: any) {
    return fromPromise(API.post("getUser", "/getUser", {body: params}))
      .map(
        result => {
          debugger;
          return result;
        },
        error => {
          // return and handle error
          console.log(error);
        }
      );
  }

  /** get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** signout */
  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { fromPromise} from "rxjs/internal-compatibility";
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Auth, API } from 'aws-amplify';
import {UtilitiesService} from './utilities.service';

@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  public userInfo = new BehaviorSubject<any>({});

  isEmpty = UtilitiesService.isEmpty;
  setLocal = UtilitiesService.setLocal;
  getLocal = UtilitiesService.getLocal;
  storageSupported = UtilitiesService.storageSupported;

  constructor(private router: Router) {

    this.loggedIn = new BehaviorSubject<boolean>(false);

    // initialize user info from local storage
    let userInfo = {};
    try {
      userInfo = JSON.parse(this.getLocal('userInfo'));
    } catch (e) {
      console.log(e);
    }
    this.updateUserInfo(userInfo);
  }

  /** signup */
  public signUp(params): Observable<any> {
    return fromPromise(Auth.signUp(params));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code))
      .pipe(
        tap(() => {
          // this.getCognitoUserInfo();
        }, error => {
          // handle error
          console.log(error);
        })
      );
  }

  /** signin */
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => {
        }, error => {
          // handle error
          console.log(error)
        })
      );
  }

  // setUserInfo() {
  //   this.getCognitoUserInfo().subscribe(
  //     (result: any) => {
  //       debugger;
  //       if (!this.isEmpty(result.attributes)) {
  //         this.loggedIn.next(true);
  //         let userInfo = result.attributes;
  //         this.setLocal("userInfo", JSON.stringify(userInfo));
  //         this.updateUserInfo(userInfo);
  //       }
  //     }
  //   );
  // }

  getUserInfo() {
    return this.userInfo.getValue();
  } // getUserInfo()

  updateUserInfo(userInfo: any) {
    this.userInfo.next(userInfo);
  } // updateUserInfo()

  public getCognitoUserInfo() {
    return fromPromise(Auth.currentUserInfo())
      .map(
        result => {
          if (!this.isEmpty(result.attributes)) {
            this.loggedIn.next(true);
            let userInfo = result.attributes;
            this.setLocal("userInfo", JSON.stringify(userInfo));
            this.updateUserInfo(userInfo);
          }
          return true;
        },
        error => {
          // return and handle error
          console.log(error);
        }
    );
  }

  public getUser(params: any) {
    return fromPromise(API.post("getUser", "/getUser", {body: params}))
      .map(
        result => {
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
          UtilitiesService.clearStorage();
          this.updateUserInfo({});
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}

import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {API} from 'aws-amplify';


@Injectable()
export class VoteService {

  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
    protected router: Router) {

  } // constructor()

  castVote (params: any): Observable<any> {
    return fromPromise(API.post("castVote", "/castVote", {body: params}))
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

  getVote (params?: any): Observable<any> {
    return fromPromise(API.post("getVote", "/getVote", {body: params}))
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

  getVotes (params?: any): Observable<any> {
    return fromPromise(API.post("getVotes", "/getVotes", {body: params}))
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

}

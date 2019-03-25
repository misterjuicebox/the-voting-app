import { Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import Amplify, {API} from 'aws-amplify';
import {fromPromise} from 'rxjs/internal-compatibility';


@Injectable()
export class VoterGroupService {

  private API_URL = 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev';

  private _selectedVoterGroup: any = {};

  get selectedVoterGroup(): any {
    return this._selectedVoterGroup;
  }

  set selectedVoterGroup(value: any) {
    this._selectedVoterGroup = value;
  }

  constructor(private http: HttpClient) {
    // Amplify.configure({
    //   API: {
    //     endpoints: [
    //       {
    //         name: "createVoterGroup",
    //         endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
    //         region: 'us-east-1'
    //       },
    //     ]
    //   }
    // });
  }

  // createVoterGroup(name, description) {
  //   let headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  //   // let options = new RequestOptions({ headers: headers});
  //   let DATA =  Object.assign(name, description);
  //   let body = JSON.stringify(DATA);
  //   return this.http.post(this.API_URL + '/createVoterGroup', body, headers).map((res: HttpResponse) => res.json());
  // }

  createVoterGroup (params: any): Observable<any> {
    return fromPromise(API.post("createVoterGroup", "/createVoterGroup", {body: params}))
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

  addVoterToGroup (params: any): Observable<any> {
    return fromPromise(API.post("addVoterToGroup", "/addVoterToGroup", {body: params}))
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

  updateVoterGroup (params: any): Observable<any> {
    return fromPromise(API.post("updateVoterGroup", "/updateVoterGroup", {body: params}))
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

  getVoterGroups (params?: any): Observable<any> {
    return fromPromise(API.post("getVoterGroups", "/getVoterGroups", {body: params}))
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

  createUserVoterGroup (params: any): Observable<any> {
    return fromPromise(API.post("createUserVoterGroup", "/createUserVoterGroup", {body: params}))
      .map(
        result => {
          console.log(result);
          return result;
        },
        error => {
          // retun and handle error
          console.log(error)
        }
      );
  }

  createVG (params: any): Observable<any> {
    let headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.post(this.API_URL + '/createVoterGroup', JSON.stringify(params), headers)
      .pipe(
        catchError(err => {
          return this.handleError(err)
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // getInfo(id: string){
  //   return this.http.get(this.API_URL + id)
  //     .map((res:Response) => res.json());
  // }

}

import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {API} from 'aws-amplify';


@Injectable()
export class ProposalService {

  private _selectedProposal: any = {};

  get selectedProposal(): any {
    return this._selectedProposal;
  }

  set selectedProposal(value: any) {
    this._selectedProposal = value;
  }

  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
    protected router: Router) {

  } // constructor()

  createProposal (params: any): Observable<any> {
    return fromPromise(API.post("createProposal", "/createProposal", {body: params}))
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

  addProposalToGroup (params: any): Observable<any> {
    return fromPromise(API.post("addProposalToGroup", "/addProposalToGroup", {body: params}))
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

  getProposals (params?: any): Observable<any> {
    return fromPromise(API.post("getProposals", "/getProposals", {body: params}))
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

  getProposal (params?: any): Observable<any> {
    return fromPromise(API.post("getProposal", "/getProposal", {body: params}))
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

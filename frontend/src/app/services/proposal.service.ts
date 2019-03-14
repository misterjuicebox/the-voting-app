import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProposalService {

  constructor(
    protected http: HttpClient,
    protected authService: AuthService,
    protected router: Router) {

  } // constructor()

  /**
   * creates a proposal
   */
  createProposal(params: any) {
    return this.http.post('https://rp0nyddnwk.execute-api.us-east-1.amazonaws.com/dev' + '/createProposal', JSON.stringify(params), this.authService.getHeaders())
      .catch(error => {return console.log('error'); });

  } // createProposal()

}

import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import Amplify from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-voting-app-dev';

  constructor() {

    Amplify.configure({
      Auth: {
        mandatorySignIn: true,
        region: environment.cognito.REGION,
        userPoolId: environment.cognito.USER_POOL_ID,
        identityPoolId: environment.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: environment.cognito.APP_CLIENT_ID
      },
      // Storage: {
      //   region: config.s3.REGION,
      //   bucket: config.s3.BUCKET,
      //   identityPoolId: config.cognito.IDENTITY_POOL_ID
      // },
      API: {
        endpoints: [
          {
            name: "createVoterGroup",
            endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
            region: 'us-east-1'
          },
          {
            name: "createUserVoterGroup",
            endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
            region: 'us-east-1'
          },
          {
            name: "getVoterGroups",
            endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
            region: 'us-east-1'
          },
          {
            name: "addVoterToGroup",
            endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
            region: 'us-east-1'
          },
          {
            name: "getUser",
            endpoint: 'https://ril7jqatdc.execute-api.us-east-1.amazonaws.com/dev',
            region: 'us-east-1'
          }
        ]
      }
    });
  }

}

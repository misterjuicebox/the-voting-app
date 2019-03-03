import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import Amplify from 'aws-amplify';
//
// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: environment.cognito.REGION,
//     userPoolId: environment.cognito.USER_POOL_ID,
//     identityPoolId: environment.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: environment.cognito.APP_CLIENT_ID
//   },
//   Storage: {
//     region: environment.s3.REGION,
//     bucket: environment.s3.BUCKET,
//     identityPoolId: environment.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: "notes",
//         endpoint: environment.apiGateway.URL,
//         region: environment.apiGateway.REGION
//       },
//     ]
//   }
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

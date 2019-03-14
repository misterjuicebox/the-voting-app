// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  s3: {
    REGION: "us-east-1",
    BUCKET: "the-voting-app-client-dev"
  },
  apiGateway: {
    REGION: "YOUR_API_GATEWAY_REGION",
    URL: "YOUR_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NsuzsFlGF",
    APP_CLIENT_ID: "4k704q3rv8o5elt4j2uba94uv5",
    IDENTITY_POOL_ID: "us-east-1:1b41ff72-41ef-4856-8506-3b6ff4e2759d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

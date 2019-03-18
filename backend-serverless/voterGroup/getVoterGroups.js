import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  // const data = JSON.parse(event.body);
  const params = {
    RequestItems: {
      'dev-voterGroups': {
        Keys: [
          {
            userId: {
              S: event.requestContext.identity.cognitoIdentityId
            }
          }
        ],
        ConsistentRead: true
      }
    }
  };

  try {
    await dynamoDbLib.call("batchGet", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}

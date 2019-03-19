import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {
  // const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-voterGroups',
    IndexName: "userVoterGroupIdx",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    },
    Projection: {
      ProjectionType: "ALL",
      NonKeyAttributes: [
        "name, description"
      ]
    }  };

  try {
    const result = await dynamoDbLib.call("query", params);
    console.log(result.Items);
    callback(null, success(result.Items));
    // return success(params.Item);
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}

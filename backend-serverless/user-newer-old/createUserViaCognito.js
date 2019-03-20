import * as dynamoDbLib from "../libs/dynamodb-lib";
import {failure, success} from "../libs/response-lib";

export async function main(event, context, callback) {
  console.log(event);
  // const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.request.userAttributes.email,
      email: event.request.userAttributes.email,
      firstName: event.request.userAttributes['custom:firstName'],
      lastName: event.request.userAttributes['custom:lastName'],
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    // Return to Amazon Cognito
    callback(null, event);
    // return success(params.Item);
  } catch (e) {
    // Return to Amazon Cognito
    callback(null, event);
    // return failure({ status: false });
  }
};





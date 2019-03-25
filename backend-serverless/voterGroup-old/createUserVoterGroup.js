import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: process.env.tableName1,
    Item: {
      voterGroupId: uuid.v1(),
      userId: event.requestContext.identity.cognitoIdentityId,
      createdAt: date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}

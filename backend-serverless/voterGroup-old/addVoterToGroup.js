import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  console.log(event.requestContext);
  const data = JSON.parse(event.body);
  console.log(event);
  const params = {
    TableName: process.env.tableName1,
    Item: {
      userId: data.userId,
      voterGroupId: data.voterGroupId,
      name: data.name,
      description: data.description,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
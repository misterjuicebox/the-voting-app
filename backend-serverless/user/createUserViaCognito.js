let AWS = require('aws-sdk');


// import * as dynamoDbLib from "../libs/dynamodb-lib";

exports.main = async function main(event, context, callback) {
  console.log(event);
  // const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.request.userAttributes.sub,
      email: event.request.userAttributes.email,
      firstName: event.request.userAttributes['custom:firstName'],
      lastName: event.request.userAttributes['custom:lastName'],
      createdAt: Date.now()
    }
  };

  try {
    await call("put", params);
    // Return to Amazon Cognito
    callback(null, event);
    // return success(params.Item);
  } catch (e) {
    // Return to Amazon Cognito
    callback(null, event);
    // return failure({ status: false });
  }
};

function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}





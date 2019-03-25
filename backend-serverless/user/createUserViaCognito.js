let AWS = require('aws-sdk');


// import * as dynamoDbLib from "../libs/dynamodb-lib";

exports.main = async function main(event, context, callback) {
  console.log(event);
  // const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-theVotingApp',
    Item: {
      pk: event.request.userAttributes.email,
      sk: 'user',
      userId: event.request.userAttributes.sub,
      firstName: event.request.userAttributes['custom:firstName'],
      lastName: event.request.userAttributes['custom:lastName'],
      createDate: Date.now()
    }
  };

  try {
    await call("put", params);
    console.log(params);
    // Return to Amazon Cognito
    callback(null, event);
    // return success(params.Item);
  } catch (e) {
    console.log(e);
    // Return to Amazon Cognito
    callback(null, event);
    // return failure({ status: false });
  }
};

function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}





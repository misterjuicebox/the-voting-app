let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);
  console.log('successfully hit get user');

  const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      // userId: data.userId,
      pk: data.email,
      sk: 'user'
    }
  };

  try {
    const result = await call("get", params);
    console.log(result);
    // Return to Amazon Cognito
    callback(null, buildResponse(200, result.Item));
    // return success(params.Item);
  } catch (e) {
    // Return to Amazon Cognito
    console.log(e);
    callback(null, buildResponse(500, {status: false}));
    // return failure({ status: false });
  }
};

function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}





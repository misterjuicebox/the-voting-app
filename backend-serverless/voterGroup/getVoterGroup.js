let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);

  const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: data.voterGroupId,
      sk: data.email
    }
  };

  let verifyResult = {};

  try {
    const result = await call("get", params);
    console.log(result);
    if (result.Item.pk) {
      verifyResult = await call("get", buildParams(result.Item.pk, 'voterGroup'));

      console.log(verifyResult);
    }
    // Return to Amazon Cognito
    callback(null, buildResponse(200, verifyResult.Item));
    // return success(params.Item);
  } catch (e) {
    // Return to Amazon Cognito
    console.log(e);
    callback(null, buildResponse(500, {status: false}));
    // return failure({ status: false });
  }
};

function buildParams(voterGroupId, sk) {
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: voterGroupId,
      sk: sk
    }
  };
  console.log(params)
  return params;
}

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





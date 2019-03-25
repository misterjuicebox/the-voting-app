let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);

  const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: data.proposalId,
      sk: data.voterGroupId
    }
  };

  let verifyResult = {};
  let finalResult = {};

  try {
    const result = await call("get", params)
    console.log(result);
    if (result.Item.sk) {
      verifyResult = await call("get", buildParams(result.Item.sk, data.email));

      console.log(verifyResult);

      if (verifyResult.Item.pk && verifyResult.Item.sk === data.email) {
        finalResult = await call("get", buildFinalParams(data.proposalId));
        console.log(finalResult);
      }
    }
    // Return to Amazon Cognito
    callback(null, buildResponse(200, finalResult.Item));
    // return success(params.Item);
  } catch (e) {
    // Return to Amazon Cognito
    console.log(e);
    callback(null, buildResponse(500, {status: false}));
    // return failure({ status: false });
  }
};

function buildParams(voterGroupId, email) {
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: voterGroupId,
      sk: email
    }
  };
  console.log(params)
  return params;
}

function buildFinalParams(proposalId) {
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: proposalId,
      sk: 'proposal'
    }
  };
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





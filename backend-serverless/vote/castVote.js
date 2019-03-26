let AWS = require('aws-sdk');
let uuid = require("uuid");

exports.main = async function main(event, context) {
  const data = JSON.parse(event.body);
  console.log(event);
  const params = {
    TableName: 'dev-theVotingApp',
    Item: {
      pk: data.email,
      sk: data.proposalId,
      voteId: uuid.v1(),
      voterGroupId: data.voterGroupId,
      vote: data.vote,
      createDate: Date.now()
    }
  };

  try {
    await call("put", params);
    console.log(params.Item);
    return buildResponse(200, params.Item);
  } catch (e) {
    console.log(e);
    return buildResponse(500, { status: false });
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
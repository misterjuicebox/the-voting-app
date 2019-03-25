let uuid = require("uuid");
let AWS = require('aws-sdk');

exports.main = async function main(event) {
  const data = JSON.parse(event.body);
  console.log(event);
  const params = {
    TableName: 'dev-theVotingApp',
    Item: {
      pk: uuid.v1(),
      sk: 'voterGroup',
      title: data.title,
      description: data.description,
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

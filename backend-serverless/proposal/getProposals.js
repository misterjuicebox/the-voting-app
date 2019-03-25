let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'dev-theVotingApp',
    IndexName: "sk-pk-index",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: {
      ":sk": data.email
    },
    Projection: {
      ProjectionType: "ALL",
      NonKeyAttributes: [
        "title, description"
      ]
    }
  };

  const finalResults = {};
  finalResults.Items = [];

  try {
    const result = await call("query", params);
    console.log(result.Items);
    if (result.Items.length > 0) {

      for (let i = 0; i < result.Items.length; i++) {
        console.log(result.Items[i]);
        const voterGroup = await call('get', constructParams(result.Items[i]));
        console.log(voterGroup);
        finalResults.Items.push(voterGroup.Item);
        console.log(finalResults);
      }
    }
    console.log(result);
    callback(null, buildResponse(200, finalResults.Items));
    // return success(params.Item);
  } catch (e) {
    console.log(e);
    callback(null, buildResponse(500, { status: false }));
  }
};

function constructParams(item) {
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: item.pk,
      sk: 'voterGroup'
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

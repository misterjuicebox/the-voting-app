let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      "voterGroupId": data.voterGroupId,
      "userId": data.userId
    },
    UpdateExpression: "SET title = :title, description = :description",
    ExpressionAttributeValues: {
      ":title": data.title,
      ":description": data.description
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await call("update", params);
    console.log(result.Items);
    callback(null, buildResponse(200, result.Items));
    // return success(params.Item);
  } catch (e) {
    console.log(e);
    callback(null, buildResponse(500, { status: false }));
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


const params = {
  TableName: "MYTABLE",
  Key: {
    "id": "1"
  },
  UpdateExpression: "set variable1 = :x, #MyVariable = :y",
  ExpressionAttributeNames: {
    "#MyVariable": "variable23"
  },
  ExpressionAttributeValues: {
    ":x": "hello2",
    ":y": "dog"
  }
};

let AWS = require('aws-sdk');

exports.main = async function main(event, context, callback) {
  console.log(event);
  const data = JSON.parse(event.body);

  const proposalIdResults = {};
  proposalIdResults.Items = [];

  const finalResults = {};
  finalResults.Items = [];

  try {
    console.log(data.voterGroupIds);
    for (let i = 0; i < data.voterGroupIds.length; i++) {
      const proposalIds = await call("query", constructIdParams(data.voterGroupIds[i]));
      if (proposalIds.Items.length > 0) {
        console.log(proposalIds)
        for (let x = 0; x < proposalIds.Items.length; x++) {
          proposalIdResults.Items.push(proposalIds.Items[x]);
        }
      }
    }
    console.log(proposalIdResults);

    if (proposalIdResults.Items.length > 0) {
      for (let i = 0; i < proposalIdResults.Items.length; i++) {
        const proposal = await call('get', constructParams(proposalIdResults.Items[i]));
        console.log(proposal);
        finalResults.Items.push(proposal.Item);
      }
      console.log(finalResults);
    }
    callback(null, buildResponse(200, finalResults.Items));
    // return success(params.Item);
  } catch (e) {
    console.log(e);
    callback(null, buildResponse(500, { status: false }));
  }
};

function constructIdParams(item) {
  const params = {
    TableName: 'dev-theVotingApp',
    IndexName: "sk-pk-index",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: {
      ":sk": item
    },
    Projection: {
      ProjectionType: "ALL",
    }
  };
  console.log(params);
  return params;
}

function constructParams(item) {
  const params = {
    TableName: 'dev-theVotingApp',
    Key: {
      pk: item.pk,
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

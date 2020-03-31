const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "eu-west-2"});

exports.handler = (event, context, callback) => {
    console.log("Processing...");
    const params = {
        Item: {
            date: Date.now(),
            metrics: event.key1
        },
        TableName: "healthcheckMetrics"
    };
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Metric added!'),
  };
    
    docClient.put(params, function(err, data) {
        if(err){
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
};
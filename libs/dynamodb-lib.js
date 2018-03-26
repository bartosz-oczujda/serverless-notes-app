import AWS from "aws-sdk"

AWS.config.update({ region:'eu-west-1' })

const call = (action, params) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    return dynamoDB[action](params).promise();

}

export { call }
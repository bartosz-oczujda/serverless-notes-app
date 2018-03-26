import { success, failure } from "./libs/response-lib"
import * as dynamoDBLib from "./libs/dynamodb-lib";

const main = async (event, context, callback) => {

    const params = {
        TableName: "notes",

        //only return the keys belonging to a particualr userID
        KeyConditionExpression: "userId = :userId",

        //where userId belongs to the authenticated user
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    }

    try {

        const result = await dynamoDBLib.call("query", params)
        callback(null, success(result.Items))

      } catch (e) {

        callback(null, failure({ status: false }))

      }

}

export { main }
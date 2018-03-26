import { success, failure } from "./libs/response-lib"
import * as dynamoDBLib from "./libs/dynamodb-lib";

const main = async (event, context, callback) => {

    const params = {

        TableName: 'notes',
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }

    }

    try {

        const result = await dynamoDBLib.call("get", params)

        if (result.Item) {
            
            callback(null, success(result.Item))

        } else {

            callback(null, failure({ status: false, error: "Item not found." }))
            
        }

    } catch (e) {

        callback(null, failure({ status: false }))

    }

}

export { main }
import uuid from 'uuid'
import { success, failure } from "./libs/response-lib"
import * as dynamoDBLib from "./libs/dynamodb-lib";

const main = async (event, context, callback) => {

    const data = JSON.parse(event.body)

    const params = {

        TableName: 'notes',
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: new Date().getTime()
        }

    }

    try {

        await dynamoDBLib.call('put', params)
        callback(null, success(params.Item));

    } catch (e) {

        callback(null, failure({ status: false }))

    }
    
    

}

export { main }

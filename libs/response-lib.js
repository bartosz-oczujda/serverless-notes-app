const success = (body) => {

    return buildResponse(200, body)

}

const failure = (body) => {

    return buildResponse(500, body)

}

const buildResponse = (statusCode, body) => {

    const response = {

        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)

    }

    return response

}

export {

    success,
    failure

}
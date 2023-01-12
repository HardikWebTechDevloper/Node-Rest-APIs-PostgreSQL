let LogData = require('../middlewares/apiLog.middleware')
const response = async (success, message, data) => {
    return {
        success: success,
        message: message,
        data: data
    }
}

const responseReturn = async function (status, logData, message, data = {}) {
    // console.log(message);
    var result = {};


    if (message == undefined) {
        result.message = "Unknown Message";
        result.status = false;
    } else {
        result.success = status;
        result.message = message;
        result.data = data;
    }


    // LogData.logData(result.success, logData, result.message, data);
    return result;
}

const responseToken = async (code, success, message, data) => {
    return {
        code: code,
        success: success,
        message: message,
        data: data
    }
}

module.exports = {
    response,
    responseReturn,
    responseToken
}
let models = require('../models');
const user_jwt = require("../config/jwt.config");
let jwt = require('jsonwebtoken');
let ApiLog = models.api_logs;
let _ = require("underscore");


const logData = async function (status, logData, messsage, responseData) {

    let data = {};
    let ip = logData.headers['x-real-ip'] || logData.socket.remoteAddress

    if (_.isEmpty(logData.body)) {
        data.body = logData.query;
    } else {
        data.body = logData.body;
    }
    if (logData.headers.authorization) {
        let logUsers = await getUserIdFromToken(logData.headers);

        data.user_id = logUsers.user_id;
        data.admin_user_id = null;
        data.is_admin = false;
    } else {
        data.admin_user_id = null;
        data.user_id = null;
        data.is_admin = false;
    }

    data.apiName = logData.method + ':' + JSON.stringify(logData.originalUrl);
    let saveData = {
        "api_name": data.apiName,
        "ip_address": "localhost",
        "api_request": JSON.stringify(data.body),
        "error_message": messsage,
        "status": status,
        "is_admin": data.is_admin,
        "admin_user_id": data.admin_user_id,
        "user_id": data.user_id,
        "timestamps": new Date().getTime(),
    }

    //save log
    // await ApiLog.create(saveData);

    return true;
}

// getting userId from Token
const getUserIdFromToken = async (req) => {
    return new Promise(function (resolve, reject) {
        let token = getToken(req);
        if (token) {
            try {
                jwt.verify(token, user_jwt.jwt_constant, async function (err, decoded) {
                    if (err) {
                        reject(null);
                    } else {
                        // return users
                        resolve(decoded)
                    }
                })
            } catch (ex) {
                reject(null);
            }
        } else {
            reject(null);
        }
    }).catch((e) => {
        return null;
    })
}

const getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = {
    logData
}
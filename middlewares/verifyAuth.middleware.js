const models = require("../models");
const user_jwt = require("../config/jwt.config");
const jwt = require('jsonwebtoken');
const commonResponse = require('../services/common-response.service');
const commonMessage = require('../services/common-api-message.service');
const Users = models.user;

const checkToken = async (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        try {
            jwt.verify(token, user_jwt.jwt_constant, async function (err, decoded) {
                console.log(err)
                if (err) {
                    return res.json(await commonResponse.responseToken(500, false, commonMessage.Message.INVALID_TOKEN, null));
                } else {
                    if (decoded.user_id) {
                        let user = await Users.findOne({
                            where: {
                                user_id: decoded.user_id,
                                is_active: true,
                            }
                        });

                        if (user) {
                            req.user_id = decoded.user_id
                            next();
                        } else {
                            return res.json(await commonResponse.responseToken(500, false, commonMessage.Message.INVALID_TOKEN, "code"));
                        }
                    } else {
                        return res.json(await commonResponse.responseToken(500, false, commonMessage.Message.INVALID_TOKEN, null));
                    }
                }
            })
        } catch (ex) {
            return res.json(await commonResponse.responseToken(500, false, commonMessage.Message.INVALID_TOKEN, null));
        }
    } else {
        return res.json(await commonResponse.responseToken(500, false, commonMessage.Message.INVALID_TOKEN, null));
    }
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
    checkToken,
    getToken
};
const dbQuery = require('../database/query.database');
const moment = require('moment');
const commonResponse = require('../services/common-response.service');
const commonMessage = require('../services/common-api-message.service');
const { createUserLogs } = require('../helpers/audit_logs.helper');
const user_jwt = require("../config/jwt.config");

const bcrypt = require("bcrypt")
const models = require("../models");
const { Op } = require("sequelize");
const sequelize = models.sequelize;
const jwt = require('jsonwebtoken');
const get_ip = require('ipware')().get_ip;

const Users = models.user;

/**
 * @description Register User
 * @param  {} req
 * @param  {} res
 */
module.exports.register = async (req, res) => {
    try {
        let body = req.body;
        let hashedPassword = await bcrypt.hash(body.password, 10);

        // Check unique email validation
        let checkEmail = await Users.count({
            where: {
                email: body.email,
                is_active: true
            }
        });

        if (checkEmail > 0) {
            return res.json(await commonResponse.response(false, commonMessage.User.EMAIL_EXISTS));
        }

        // Check unique phone validation
        let checkPhone = await Users.count({
            where: {
                email: body.phone,
                is_active: true
            }
        });
        if (checkPhone > 0) {
            return res.json(await commonResponse.response(false, commonMessage.User.PHONE_EXISTS));
        }

        // Create user
        body.password = hashedPassword;
        body.is_active = true;

        let user = await Users.create(body);
        if (user) {
            return res.json(await commonResponse.response(true, commonMessage.User.SAVE_SUCCESS));
        } else {
            return res.json(await commonResponse.response(false, commonMessage.User.SAVE_FAILED));
        }
    } catch (err) {
        if (process.env.APP_ENV == "development") {
            console.error(
                "[" + moment().format("DD/MM/YYYY hh:mm:ss a") + "] " + err.stack ||
                err.message
            );
            let url =
                "Location of Error : " +
                req.originalUrl +
                "  Method : " +
                req.method +
                "  Request Body : " +
                JSON.stringify(req.body);
        }
        return res.json(await commonResponse.responseReturn(false, req, commonMessage.Message.SOMETHING_WRONG, null))
    }
}

/**
 * @description Get All Users
 * @param  {} req
 * @param  {} res
 */
module.exports.getAllUsers = async (req, res) => {
    try {
        let allUsers = await Users.findAll({
            where: {
                is_active: true
            },
            attributes: ['first_name', 'last_name', 'email', 'is_active', 'created_date']
        });

        if (allUsers && allUsers.length > 0) {
            return res.json(await commonResponse.response(true, commonMessage.Message.DATA_FOUND, allUsers));
        } else {
            return res.json(await commonResponse.response(false, commonMessage.Message.NO_DATA_FOUND));
        }
    } catch (err) {
        if (process.env.APP_ENV == "development") {
            console.error(
                "[" + moment().format("DD/MM/YYYY hh:mm:ss a") + "] " + err.stack ||
                err.message
            );
            let url =
                "Location of Error : " +
                req.originalUrl +
                "  Method : " +
                req.method +
                "  Request Body : " +
                JSON.stringify(req.body);
        }
        return res.json(await commonResponse.responseReturn(false, req, commonMessage.Message.SOMETHING_WRONG, null))
    }
}

/**
 * @description Logout the user
 * @param  {} req
 * @param  {} res
 */
module.exports.logout = async (req, res) => {
    try {
        let { user_id } = req.body;

        if (!user_id) {
            return res.json(await commonResponse.responseReturn(false, req, commonMessage.User.USER_ID, null));
        }

        // Store activity log
        let ip_info = get_ip(req);
        let ip_address;

        if (ip_info && ip_info.clientIp) {
            ip_address = ip_info.clientIp;
        } else {
            ip_address = "127.0.0.1";
        }

        await createUserLogs({
            ip_address,
            created_by: user_id
        }, "Logout");

        return res.json(await commonResponse.responseReturn(true, req, commonMessage.User.LOGUT_SUCESS, null));
    } catch (error) {
        if (process.env.APP_ENV == "development") {
            console.error(
                "[" + moment().format("DD/MM/YYYY hh:mm:ss a") + "] " + err.stack ||
                err.message
            );
            let url =
                "Location of Error : " +
                req.originalUrl +
                "  Method : " +
                req.method +
                "  Request Body : " +
                JSON.stringify(req.body);
        }
        return res.json(await commonResponse.responseReturn(false, req, commonMessage.Message.SOMETHING_WRONG, null))
    }
}
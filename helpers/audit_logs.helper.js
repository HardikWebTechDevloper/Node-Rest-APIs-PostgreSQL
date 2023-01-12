let models = require("../models");
let { Op } = require("sequelize");
let moment = require("moment");

let EventLog = models.event_logs;
let RequestLog = models.request_logs;
let ActionType = models.action_type;

let UserActivity = models.user_activities;
let ActivityType = models.activity_types;

module.exports.createEventLogs = async (params, actionType) => {
    try {
        // Find action type id
        let action_type = await ActionType.findOne({ where: { action_type_name: actionType } });

        if (action_type) {
            let action_type_id = action_type.action_type_id;
            params.action_type_id = action_type_id;

            // Create Event Logs
            await EventLog.create(params);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

module.exports.createRequestLogs = async (params, actionType) => {
    try {
        // Find action type id
        let action_type = await ActionType.findOne({ where: { action_type_name: actionType } });

        if (action_type) {
            let action_type_id = action_type.action_type_id;
            params.action_type_id = action_type_id;

            // Create Request Logs
            await RequestLog.create(params);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

module.exports.createUserLogs = async (params, activity_type_name) => {
    try {
        // Find action type id
        let activity_type = await ActivityType.findOne({ where: { activity_type_name: activity_type_name } });

        console.log(activity_type);

        if (activity_type) {
            let activity_type_id = activity_type.activity_type_id;
            params.activity_type_id = activity_type_id;

            // Create User Logs
            await UserActivity.create(params);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        return false;
    }
};
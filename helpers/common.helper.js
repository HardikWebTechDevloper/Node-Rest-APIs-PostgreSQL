let models = require("../models");
let { Op } = require("sequelize");
let moment = require("moment");

/**
 * @description Convert date into IST Timezone.
 * @param  {} dateTime
 */
module.exports.convertDateInTimezone = async (dateTime) => {
    return moment(dateTime).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
};


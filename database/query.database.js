const connect = require('./connect.database');

module.exports = {
    query(quertText, params) {
        return new Promise((resolve, reject) => {
            connect.query(quertText, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
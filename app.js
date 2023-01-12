const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const appConfig = require('./config/app.config');
const routes = require('./routes/index');
var path = require('path');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes)
app.use(express.static(path.join(__dirname, 'uploads')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(err.status || 404).json({
        message: "404"
    });
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: "No such route exists"
    });
});

app.listen(appConfig.port, () => {
    console.log(`Back-end listening at ${appConfig.url}:${appConfig.port}`)
});

module.exports = app;
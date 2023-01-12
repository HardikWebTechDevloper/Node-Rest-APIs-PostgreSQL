const cluster = require('cluster');
const path = require('path');
const os = require('os');

const CPUS = os.cpus().length;

if (cluster.isMaster) {
    // Create a worker for each CPU
    for (var i = 0; i < CPUS; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online.');
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died.');
    });
} else {
    require('./app');
}
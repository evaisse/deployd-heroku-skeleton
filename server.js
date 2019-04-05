const crc32 = require('crc32');
const dotenv = require('dotenv').config({ silent: true });
var PORT = process.env.PORT || 2403;
var ENV = process.env.NODE_ENV || 'production';

// http + express + socket.io
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {
    'log level': 0,
});


// deployd
require('deployd').attach(server, {
    socketIo: io,
    env: ENV,
    db: { connectionString: process.env.MONGODB_URI }
});


if (process.env.NODE_ENV != "development") {
    app.use(express.static(__dirname+'/dist'));
} else {
    var throttle = require('express-throttle-requests');
    throttle(app, {min: 50, max: 600});
}

app.use(express.static(__dirname+'/public'));
app.use('/api', server.handleRequest);


// in any case just send the index.html page for Single-Page-Application
app.get('*', (req, res) => {
    console.log(req.url, req.headers);
    return res.sendFile(__dirname+'/public/index.html');
});


// start server
server.listen(PORT, function() {
    console.log(`start server with env ${ENV}, localhost:${PORT} `);
});

server.on('error', function(err) {
    console.log(err.stack);
    process.nextTick(function() { // Give the server a chance to return an error
        process.exit();
    });
});
'use strict';

var express = require('express');
var mongoose = require('mongoose');
 mongoose.Promise = global.Promise
/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
       replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 

var mongodbUri = 'mongodb://hugo:asdf162489@ds123370.mlab.com:23370/winter';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
	 // Setup server
	var app = express();
	var server = require('http').createServer(app);

	var bodyParser = require('body-parser');
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(express.static('build'));


	require('express')(app);

	//routes
	app.use('/api/item', require('./api/item/item.routes'));

	// Start server
	server.listen(3000, function () {
	    console.log('Express server listening on %d, in %s mode', 5000);
	});



});




/*
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);
*/

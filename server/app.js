'use strict';

var express = require('express'),
 mongoose = require('mongoose');
 mongoose.Promise = global.Promise;


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
       replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 

var mongodbUri = 'mongodb://hugo:asdf162489@ds123370.mlab.com:23370/winter';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
	 // Setup server
	var app = express(),
	       server = require('http').createServer(app),
	       NODE_ENV = process.env.NODE_ENV || 'production',
	       bodyParser = require('body-parser');
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({ extended: true }));

	console.log('node running on ', NODE_ENV);
	if(NODE_ENV==='production'){
		app.use(express.static('build'));
	}
	else{
		app.use(express.static('client'));
	}


	require('express')(app);

	//routes 
	app.use('/api/item', require('./api/item/item.routes'));

	// Start server
	var port = 3000;
	server.listen(port, function () {
	    console.log('Express server listening on port:', port);
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

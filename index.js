/*
* Host Application
*/

var express = require('express');
var mongoose = require('mongoose');

var config = require('./Config');

var webApp = require('./Web');
var api1 = require('./Api/v1');

var app = express();

app.use('/', webApp);
app.use('/api/v1', api1);



connectDb()
.on('disconnected', connectDb)
.on('error', console.error)
.once('connected', ()=>{

	console.log('Connected to database...');

	app.listen(config.port, ()=>{

		console.log("Listening On port:", config.port);
	});
});



function connectDb(){

	console.log('Connecting to database...');
	return mongoose.connect(config.dbUrl).connection;
}
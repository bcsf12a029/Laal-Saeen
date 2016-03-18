var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	name: String
});

mongoose.model('City', schema);
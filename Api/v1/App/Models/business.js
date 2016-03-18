var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	title: String,
	description: String,
	category: {type: Number, ref: 'Category'},
	profileImg: String,
	owner: {type: Number, ref: 'User'},
	addedOn: Date,
	address: {type: Number, ref: 'Address'}
});

mongoose.model('Business', schema);
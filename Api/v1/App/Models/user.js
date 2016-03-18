var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	username: String,
	email: String,
	password: String,
	name: {

		first: String,
		last: String
	},
	dob: {

		day: Number,
		month: Number,
		year: Number
	},
	profileImg: String,
	city: {type: Number, ref: 'City'},
	registeredOn: Date,
	reviews: [{_id: {type: Number, ref: 'Review'}}]
});

schema.virtual('name.full').get(function(){

	return this.name.first + ' ' + this.name.last;
});

mongoose.model('User', schema);
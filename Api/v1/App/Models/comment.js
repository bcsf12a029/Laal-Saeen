var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	body: String,
	postedOn: Date
});

mongoose.model('Comment', schema);
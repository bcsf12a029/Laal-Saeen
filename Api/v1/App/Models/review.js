var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	by: {type: Number, ref: 'User'},
	about: {type: Number, ref: 'Business'},
	rating: Number,
	comments: [{_id: {type: Number, ref: 'Comment'}}]
});

mongoose.model('Review', schema);
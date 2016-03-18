var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	address: String,
	city: {type: Number, ref: 'City'}
});

mongoose.model('Address', schema);
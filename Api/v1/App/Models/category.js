var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	_id: Number,
	name: String,
	parent: {type: Number, ref: 'Category'},
	ancestors: [{_id: {type: Number, ref: 'Category'}}]
});

mongoose.model('Category', schema);
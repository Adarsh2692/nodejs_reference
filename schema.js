const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	title: {
		type: String
	},
	name: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Scheme = mongoose.model('schema', Schema);

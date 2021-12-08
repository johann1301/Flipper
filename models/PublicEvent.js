const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const publicEventSchema = new Schema({
	title: String,
	description: String
});

const PublicEvents = mongoose.model('PublicEvent', publicEventSchema);
module.exports = PublicEvents;
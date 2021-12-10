const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const publicEventSchema = new Schema({
	imageUrl: String,
	title: String,
	date: String,
	time: String,
	address: {
		street: String,
		number: Number,
		zipcode: Number,
		city: String,
	},
	category: String,
	options: {
		music: {musicGenre: String, musicType: String},
		culture: {cultureGenre: String, cultureType: String},
		sport: { sportGenre: String, sportType: String},
		education:{educationGenre: String, educationType: String},
		other: {other: String}
	},
	description: String,
	price: Number,
    
}, {
	timestamps: true,
});

const PublicEvents = mongoose.model('PublicEvent', publicEventSchema);
module.exports = PublicEvents;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const publicEventSchema = new Schema({
	title: String,
	date: String,
	time: Number,
	address: {
		street: String,
		number: Number,
		zipcode: Number,
		city: String,
	},
	category: {
		music: {musicGenre: String, musicType: String},
		culture: {cultureGenre: String, cultureType: String},
		sport: { sportGenre: String, sportType: String},
		education:{educationGenre: String, educationType: String},
		other: {other: String}
	},
	description: String,
	price: Number,
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	imgPath: String,
    imgName: String,
}, {
	timestamps: true,
});

const PublicEvents = mongoose.model('PublicEvent', publicEventSchema);
module.exports = PublicEvents;
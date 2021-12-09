const router = require('express').Router()
const PublicEvent = require('../models/PublicEvent')

// get all public Events
router.get('/events', (req, res, next) => {
	PublicEvent.find()
		.then(publicEvents => {
			res.status(200).json(publicEvents)
		})
		.catch(err => next(err))
});

// get all tasks for a specific public Event 

// create a public Event
router.post('/create/public', (req, res, next) => {

	const { title, date, time, address:{ street, number, zipcode, 
		city }, category: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
		sport: { sportGenre, sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price } = req.body

	PublicEvent.create({ 
		title: title,
		date: date,
		time: time, 

		address: {
		  street: street,
          number: number,
          zipcode: zipcode,
          city: city,
		}, 

		category: {

		  music: {
			  musicGenre: musicGenre, 
			  musicType: musicType},

		  culture: {
			  cultureGenre: cultureGenre, 
			  cultureType: cultureType},

		  sport: {
			  sportGenre: sportGenre, 
			  sportType: sportType},

		  education:{
			  educationGenre: educationGenre,
			  educationType: educationType},

		  other: {other: other}

		}, 

		description: description, 
		price: price, 
		
	})
		.then(publicEvent => {
			res.status(201).json(publicEvent)
		})
		.catch(err => next(err))
});

// get a specific public Event
router.get('/events/:id', (req, res, next) => {
	PublicEvent.findById(req.params.id)
		.then(publicEvent => {
			
			if (!publicEvent) {
				res.status(404).json(publicEvent)
			} else {
				res.status(200).json(publicEvent)
			}
		})
		.catch(err => next(err))
});

router.put('/:id', (req, res, next) => {
	const { title, description } = req.body
	PublicEvent.findByIdAndUpdate(req.params.id, {
		title,
		description
	}, { new: true })
		.then(updatedPublicEvent => {
			res.status(200).json(updatedPublicEvent)
		})
		.catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
	PublicEvent.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'Event deleted' })
		})
});


module.exports = router;
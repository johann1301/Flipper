const router = require('express').Router()
const PublicEvent = require('../models/PublicEvent')

// get all public Events
router.get('/', (req, res, next) => {
	PublicEvent.find()
		.then(publicEvents => {
			res.status(200).json(publicEvents)
		})
		.catch(err => next(err))
});

// get all tasks for a specific public Event 

// create a public Event
router.post('/', (req, res, next) => {
	const { title, description } = req.body
	PublicEvent.create({ title, description })
		.then(publicEvent => {
			res.status(201).json(publicEvent)
		})
		.catch(err => next(err))
});

// get a specific public Event
router.get('/:id', (req, res, next) => {
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
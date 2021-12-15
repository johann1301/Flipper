const router = require('express').Router()
const User = require('../models/User.model')


// get a specific public Event
router.get('/profile', (req, res, next) => {
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

// upload an image

router.post('/upload', fileUploader.single('imageURL'), (req, res, next) => {
	if (!req.file) {
	  next(new Error('No file uploaded!'));
	  return;
	}

	// get the URL of the uploaded file and send it as a response.
	// 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
	res.json({ secure_url: req.file.path });
  });
  


router.put('/events/:id', fileUploader.single("imageUrl"), (req, res, next) => {

	const { imageUrl, title, date, time, address:{ street, number, zipcode, 
		city }, category, options: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
		sport: { sportGenre, sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price, owner } = req.body

	PublicEvent.findByIdAndUpdate(req.params.id, {
		imageUrl, 
		title,
		date,
		time,

		address: {
		  street,
          number,
          zipcode,
          city,
		}, 

		category,

		options: {

		  music: {
			  musicGenre,
			  musicType,
		  },

		  culture: {
			  cultureGenre, 
			  cultureType,
			},

		  sport: {
			  sportGenre, 
			  sportType,
			},

		  education:{
			  educationGenre,
			  educationType,
			},

		  other: {other}

		}, 

		description, 
		price,
		owner,
	}, { new: true })
		.then(updatedPublicEvent => {
			res.status(200).json(updatedPublicEvent)
		})
		.catch(err => next(err))
})



module.exports = router;
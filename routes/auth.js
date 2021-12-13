const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../middleware/jwt.js')

const saltRounds = 10

router.post('/signup', (req, res, next) => {
	const { email, password, name, birthday } = req.body;

	// Check if email or password or name are provided as empty string 
	if (email === '' || password === '' || name === '' || birthday === '') {
		res.status(400).json({ message: "Provide email, password, name and birthday" });
		return;
	}

	// Use regex to validate the email format
	const emailValid = email.includes('@')
	if (!emailValid) {
		res.status(400).json({ message: 'Provide a valid email address.' });
		return;
	}

	// Use regex to validate the password format
	if (password.length < 4) {
		res.status(400).json({ message: 'Password must have at least 4 characters and contain at least one number, one lowercase and one uppercase letter.' });
		return;
	}

	// Check the users collection if a user with the same email already exists
	User.findOne({ email })
		.then((foundUser) => {
			// If the user with the same email already exists, send an error response
			if (foundUser) {
				res.status(400).json({ message: "User already exists." });
				return;
			}

			// If email is unique, proceed to hash the password
			const salt = bcrypt.genSaltSync(saltRounds);
			const hashedPassword = bcrypt.hashSync(password, salt);

			// Create the new user in the database
			// We return a pending promise, which allows us to chain another `then` 
			return User.create({ email, password: hashedPassword, name, birthday });
		})
		.then((createdUser) => {
			// Deconstruct the newly created user object to omit the password
			// We should never expose passwords publicly
			const { email, name, birthday, _id } = createdUser;

			// Create a new object that doesn't expose the password
			const user = { email, name, birthday, _id };

			// Send a json response containing the user object
			res.status(201).json({ user: user });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: "Internal Server Error" })
		});
});

router.post('/login', (req, res, next) => {
	const { email, password } = req.body

	// Check if email or password or name are provided as empty string 
	if (email === '' || password === '') {
		res.status(400).json({ message: "Provide email and password" });
		return;
	}

	User.findOne({ email })
		.then(foundUser => {
			if (!foundUser) {
				res.status(400).json({ message: "User not found" });
				return;
			}
			const passwordCorrect = bcrypt.compareSync(password, foundUser.password)
			if (passwordCorrect) {
				const { _id, email, name, birthday } = foundUser
				const payload = { _id, email, name, birthday }

				// create the json web token
				const authToken = jwt.sign(
					payload,
					process.env.TOKEN_SECRET,
					{ algorithm: 'HS256', expiresIn: '12h' }
				)
				res.status(200).json({ authToken: authToken })
			}
			else {
				res.status(401).json({ message: "Unable to authenticate user" });

			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: "Internal Server Error" })
		})
});

router.get('/verify', isAuthenticated, (req, res, next) => {
	// if the token is valid we can access it on : req.payload
	console.log('request payload: ', req.payload)
	res.status(200).json(req.payload)
});
 

module.exports = router;
const express = require('express');
const Schema = require('./schema');
const mware = require('./mware');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('user');
});

router.post('/', mware, async (req, res) => {
	const { title, name } = req.body;
	try {
		let user = new Schema({ title, name });
		await user.save();
		res.send(req.body);
	} catch (error) {
		res.send(error.message);
	}
});

module.exports = router;

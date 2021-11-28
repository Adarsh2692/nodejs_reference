const express = require('express');
const app = express();
const connect = require('./beconnect');
connect();

app.use(
	express.json({
		extended: false
	})
);

app.get('/', (req, res) => {
	res.send('hello');
});

app.use('/user', require('./user'));

app.listen(4000, console.log('app is running'));

module.exports = app;

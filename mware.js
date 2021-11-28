const mware = (req, res, next) => {
	const { name } = req.body;
	if (name.length > 3) next();
	else res.send('too small name');
};

module.exports = mware;

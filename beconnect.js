const mongoose = require('mongoose');

const connect = async () => {
	try {
		await mongoose.connect('mongodb+srv://Adarsh:1234@cluster0.2zo0m.mongodb.net/test1?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('mongodb connected');
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = connect;
//mongodb+srv://Adarsh:1234@cluster0.2zo0m.mongodb.net/test1?retryWrites=true&w=majority

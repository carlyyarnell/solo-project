const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = 'mongodb://localhost:27017/solo-project';
//mongoose.connect(mongoURI);

//const connection = mongoose.connection;

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to Mongo DB.'))
	.catch((err) => console.log(err));

// connection.once('open', function() {
//   console.log('MongoDB database connection established successfully');
// })


const entrySchema = new Schema({
  //title: {type: String, required: true},
  location: {type: String, required: true},
  date: {type: String, required: true},
  notes: {type: String, required: true}
});

module.exports = mongoose.model('Entry', entrySchema);
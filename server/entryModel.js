const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  location: {type: String},
  date: {type: String},
  notes: {type: String, required: true}
});

module.exports = mongoose.model('Entry', entrySchema);
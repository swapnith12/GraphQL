const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//here we are creating a model in DB which has below mentioned data defined by schema
const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  //giving connection to User model
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}
});

module.exports = mongoose.model('Event', eventSchema);
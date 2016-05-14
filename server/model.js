var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:8080/my_database');

var Schema = mongoose.Schema;

// create a schema
var gameInfoSchema = new Schema({
  title: { type: String, required: true },
  descrption: { type: String },
  pictures: [ { type: String } ],
  videos: [ { type: String } ],
  link_facebook: { type: String },
  link_twitter: { type: String },
  link_google_plus: { type: String },
  downloand: { type: String },
  version: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var gameInfo = mongoose.model('gameInfo', gameInfoSchema);

// make this available to our users in our Node applications
module.exports = gameInfo;
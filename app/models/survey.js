/**
 * Created by chocky on 9/29/2017.
 */
// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('survey', {
  question : {type : String, default: ''},
  answer : {type : String, default: ''}
  });
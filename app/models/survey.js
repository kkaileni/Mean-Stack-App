/**
 * Created by chocky on 9/29/2017.
 */
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('survey', {

  question : {type : String, default: ''},
  answer : {type : String, default: ''}
  });
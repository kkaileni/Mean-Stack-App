/**
 * Created by chocky on 9/29/2017.
 */

var Survey = require('./models/survey');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/survey', function(req, res) {
    // use mongoose to get all survey in the database
    Survey.find(function(err, survey) {

      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(survey); // return all survey in JSON format
    });
  });


  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};

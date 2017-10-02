/**
 * Created by chocky on 9/29/2017.
 */
// public/js/services/SurveyService.js
angular.module('SurveyService', []).factory('Survey', ['$http', function($http) {

  return {
    // call to get all Surveys
    get : function() {
      return $http.get('/api/surveys');
    },

    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new survey
    create : function(surveyData) {
      return $http.post('/api/surveys', surveyData);
    },

    // call to DELETE a survey
    delete : function(id) {
      return $http.delete('/api/surveys/' + id);
    }
  }

}]);

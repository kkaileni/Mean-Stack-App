/**
 * Created by chocky on 9/29/2017.
 */
angular.module('surveyApp').controller('SurveyController', ['surveyService', '$location', function(surveyService, $location) {

  var surveyVm = this;

  surveyVm.addQ = addQ;
  surveyVm.saveQ = saveQ;
  surveyVm.tagline = 'Add all the questions individually then Generate survey to allow users to answer them';
  surveyVm.qArr = [];

  function addQ(que) {
    surveyVm.qArr.push(que);
  }

  function saveQ() {
    surveyService.save(surveyVm.qArr);
    $location.url('/generateSurvey');
  }
}]);
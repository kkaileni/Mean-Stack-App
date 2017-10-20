/**
 * Created by chocky on 10/3/2017.
 */
angular.module('surveyApp').controller('GenController', ['surveyService', function(surveyService) {
  var genVm = this;

  genVm.reset = reset;

  genVm.ques = surveyService.getQues();

  function reset() {
    surveyService.qArr = [];
  }
}]);


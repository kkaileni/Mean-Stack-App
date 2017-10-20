/**
 * Created by chocky on 9/29/2017.
 */
angular.module('surveyApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/surveys', {
      templateUrl: 'views/survey.html',
      controller: 'SurveyController',
      controllerAs: 'surveyVm'
    })
    .when('/generateSurvey', {
      templateUrl: 'views/generateSurvey.html',
      controller: 'GenController',
      controllerAs : 'genVm'
    });

  $locationProvider.html5Mode(true);

}]);


/**
 * Created by chocky on 9/29/2017.
 */
angular.module('surveyApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/surveys', {
      templateUrl: 'views/survey.html',
      controller: 'SurveyController'
    });

  $locationProvider.html5Mode(true);

}]);


/**
 * Created by chocky on 9/29/2017.
 */
// public/js/services/surveyService.js
angular.module('surveyApp').service('surveyService', ['$http', function($http) {

  var self = this;
  self.get = get;
  self.create = create;
  self.del = del;
  self.save = save;
  self.getQues = getQues;

  self.qArr = [];

  function save(arr) {
    self.qArr = arr;
  }

  function getQues() {
    return self.qArr;
  }
  function get() {
    return $http.get('/api/surveys');
  }

  function create(surveyData) {
    return $http.post('/api/surveys', surveyData);
  }

  function del(id) {
    return $http.delete('/api/surveys/' + id);
  }

}]);

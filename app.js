app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/test', {
      templateUrl: 'test.html',
      controller: 'testCtrl'
    })
})
app.controller('homeCtrl', function ($scope, $location) {
  $scope.lang = "ITA";
  $scope.goto = function () {
    $location.path('/test');
    console.log('go');
  }
})
app.controller('testCtrl', function($scope){
  $scope.test = "test";
})

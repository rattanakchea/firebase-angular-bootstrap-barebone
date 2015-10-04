'use strict';
var app = angular.module('appName', [
  'ngAnimate',
  'ngRoute',
  'firebase',
  'toaster'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'main'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'AuthCtrl',
    controllerAs: 'auth'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'AuthCtrl',
    controllerAs: 'auth'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'HomeCtrl',
    controllerAs: 'main'
  })
  .otherwise({
    redirectTo: '/'
  });
});

// --------- constant -------------

app.constant('FbURL', 'someurl.firebaseio.com/')
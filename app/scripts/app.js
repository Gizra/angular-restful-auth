'use strict';

angular
  .module('angularRestfulAuthApp', [
    'ngCookies',
    'ngRoute',
    'angularLocalStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login-token', {
        templateUrl: 'views/login-token.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

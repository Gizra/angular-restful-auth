'use strict';

angular.module('angularRestfulAuthApp')
  .controller('MainCtrl', function ($scope, storage, userLogin) {
    storage.bind($scope,'url');
    storage.bind($scope,'user.name');
    storage.bind($scope,'user.pass');

    $scope.login = function(method) {
      userLogin.login($scope.url, $scope.user, method)
      .success(function(data, status) {
        $scope.status = status;
        $scope.response = data;
      }).error(function(data, status) {
          $scope.status = status;
          $scope.response = data;
      });


    }
  });

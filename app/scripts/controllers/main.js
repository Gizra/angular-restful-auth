'use strict';

angular.module('angularRestfulAuthApp')
  .controller('MainCtrl', function ($scope, storage, userLogin) {
    storage.bind($scope,'url');
    storage.bind($scope,'user.name');
    storage.bind($scope,'user.pass');

    $scope.login = function() {
      userLogin.login($scope.url, $scope.user)
      .success(function(data, status) {
        $scope.status = status;
        $scope.response = data;
      }).error(function(reason, status) {
          $scope.status = status;
          $scope.response = reason;
      });


    }
  });

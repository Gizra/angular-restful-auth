'use strict';

describe('Controller: LogintokenCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRestfulAuthApp'));

  var LogintokenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogintokenCtrl = $controller('LogintokenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

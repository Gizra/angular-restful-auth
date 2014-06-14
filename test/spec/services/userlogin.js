'use strict';

describe('Service: Userlogin', function () {

  // load the service's module
  beforeEach(module('angularRestfulAuthApp'));

  // instantiate service
  var Userlogin;
  beforeEach(inject(function (_Userlogin_) {
    Userlogin = _Userlogin_;
  }));

  it('should do something', function () {
    expect(!!Userlogin).toBe(true);
  });

});

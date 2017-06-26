/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:48 GMT+0530 (IST)
 Helper Name : utility
 Description : No description available
 
 */

 describe('Unit: utility', function () {

  var $factory;

  beforeEach(function () {
    module('awesomeproject.factories');

    inject(function (utility) {
      $factory = utility;
    });
  });

  it('sample test case', function () {
  	expect($factory.coolMethod()).toEqual("cool");
  });
});
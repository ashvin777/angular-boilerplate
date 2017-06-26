/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:43 GMT+0530 (IST)
 Service Name : webservice
 Description : No description available
 
 */

 describe('Unit: webservice', function () {

  var $service;

  beforeEach(function () {
    module('awesomeproject.services');

    inject(function (webservice) {
      $service = webservice;
    });
  });

  it('sample test case for service ', function () {


  });
});
/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 Helper Name : ~!factoryname!~
 Description : ~!description!~
 
 */

 describe('Unit: ~!factoryname!~', function () {

  var $factory;

  beforeEach(function () {
    module('~!appname!~.factories');

    inject(function (~!factoryname!~) {
      $factory = ~!factoryname!~;
    });
  });

  it('sample test case', function () {
  	expect($factory.coolMethod()).toEqual("cool");
  });
});
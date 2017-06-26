/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:39 GMT+0530 (IST)
 Directive Name : list-item
 Description : No description available
 
 */

 describe('Unit: list-item', function() {

  var compile, rootScope;

  beforeEach(module('awesomeproject.directives'));
  beforeEach(module('src/directives/list-item/list-item.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<list-item></list-item>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});
/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 Directive Name : ~!directivename!~
 Description : ~!description!~
 
 */

 describe('Unit: ~!directivename!~', function() {

  var compile, rootScope;

  beforeEach(module('~!appname!~.directives'));
  beforeEach(module('src/directives/~!foldername!~/~!directivename!~.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<~!directivename!~></~!directivename!~>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});
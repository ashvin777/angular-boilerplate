/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 Controller Name : ~!controllername!~
 View Name : ~!pagename!~.html
 Description : ~!description!~
 
 */

describe('Unit: ~!controllername!~', function() {

    beforeEach(module('~!appname!~.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('~!controllername!~', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})
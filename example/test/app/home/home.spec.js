/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:31 GMT+0530 (IST)
 Controller Name : home
 View Name : home.html
 Description : No description available
 
 */

describe('Unit: home', function() {

    beforeEach(module('awesomeproject.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('home', {
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
'use strict';

/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 
 */

// init modules, module names equal to folder structure
angular.module('~!appname!~.app', []); // view controllers etc.
angular.module('~!appname!~.services', []); // services
angular.module('~!appname!~.filters', []); // filter
angular.module('~!appname!~.factories', []); // helper
angular.module('~!appname!~.directives', []); // directives

angular.module('~!appname!~.libs', ['ui.router', 'ui.bootstrap']);

angular.module('~!appname!~', ['~!appname!~.services', '~!appname!~.filters', '~!appname!~.factories', '~!appname!~.directives', '~!appname!~.app', '~!appname!~.libs'])

.run(function() {

})

.constant('Config', {
    constantVariables: "constantValue"
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("app", {
            url: "/app",
            templateUrl: "src/app/app.html"
        })
    	//~!states!~

    //~!defaultState!~
});
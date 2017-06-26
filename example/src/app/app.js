'use strict';

/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:10:34 GMT+0530 (IST)
 
 */

// init modules, module names equal to folder structure
angular.module('awesomeproject.app', []); // view controllers etc.
angular.module('awesomeproject.services', []); // services
angular.module('awesomeproject.filters', []); // filter
angular.module('awesomeproject.factories', []); // helper
angular.module('awesomeproject.directives', []); // directives

angular.module('awesomeproject.libs', ['ui.router', 'ui.bootstrap']);

angular.module('awesomeproject', ['awesomeproject.services', 'awesomeproject.filters', 'awesomeproject.factories', 'awesomeproject.directives', 'awesomeproject.app', 'awesomeproject.libs'])

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
            .state("app.home", {
                url: "/home",
                views: {
                    AppContent: {
                        templateUrl: "src/app/home/home.html",
                        controller: "home"
                    }
                }
            })
        //~!states!~

        $urlRouterProvider.otherwise("/app/home");
    });
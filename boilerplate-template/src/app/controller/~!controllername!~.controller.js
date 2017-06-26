'use strict';

/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 Controller Name : ~!controllername!~
 View Name : ~!pagename!~.html
 Description : ~!description!~
 
 */
angular.module('~!appname!~.app')

.controller('~!controllername!~', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "~!pagename!~";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
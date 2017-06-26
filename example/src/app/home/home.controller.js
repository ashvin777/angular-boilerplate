'use strict';

/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:31 GMT+0530 (IST)
 Controller Name : home
 View Name : home.html
 Description : No description available
 
 */
angular.module('awesomeproject.app')

.controller('home', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "home";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
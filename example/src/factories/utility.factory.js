'use strict';

/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:48 GMT+0530 (IST)
 Helper Name : utility
 Description : No description available
 
 */
angular.module('awesomeproject.factories')

.factory('utility', [
    function() {
        var cool = {
        	coolMethod : function(accounts) {
            	return "cool";
        	}
    	}
        return cool;
    }
]);
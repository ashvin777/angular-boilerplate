'use strict';

/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:43 GMT+0530 (IST)
 Service Name : webservice
 Description : No description available
 
 */
angular.module('awesomeproject.services')

.service('webservice', [
    function() {
        this.coolService = function() {
            return "some data";
        };
    }
]);
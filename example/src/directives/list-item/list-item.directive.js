'use strict';

/**

 Created By : ashvin
 Creation Date : Mon Jun 26 2017 22:12:39 GMT+0530 (IST)
 Directive Name : listItem
 View Name : list-item.template.html
 Description : No description available
 
 */
angular.module('awesomeproject.directives')

.directive('listItem', [

    function() {
        return {
            restrict: 'EAC',
            templateUrl: 'src/directives/list-item/list-item.template.html',
            link: function(scope, element, attrs, controller) {

            }
        };
    }
]);
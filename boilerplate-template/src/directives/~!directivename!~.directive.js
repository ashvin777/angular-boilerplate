'use strict';

/**

 Created By : ~!username!~
 Creation Date : ~!todaysdate!~
 Directive Name : ~!camelCaseDirectivename!~
 View Name : ~!directivename!~.template.html
 Description : ~!description!~
 
 */
angular.module('~!appname!~.directives')

.directive('~!camelCaseDirectivename!~', [

    function() {
        return {
            restrict: 'EAC',
            templateUrl: 'src/directives/~!foldername!~/~!directivename!~.template.html',
            link: function(scope, element, attrs, controller) {

            }
        };
    }
]);
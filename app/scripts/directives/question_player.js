'use strict';

/**
 * @ngdoc directive
 * @name p20ContextSensingApp.directive:questionPlayer
 * @description
 * # questionPlayer
 */
angular.module('p20ContextSensingApp')
  .directive('questionPlayer', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the questionPlayer directive');
      }
    };
  });

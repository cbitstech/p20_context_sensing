'use strict';

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
function guid() {
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

// PurpleRobot.setEnvironment('production');


/**
 * @ngdoc overview
 * @name p20ContextSensingApp
 * @description
 * # p20ContextSensingApp
 *
 * Main module of the application.
 */
angular
  .module('p20ContextSensingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/morning', {
        templateUrl: 'views/morning.html',
        controller: 'MorningCtrl'
      })
      .when('/evening', {
        templateUrl: 'views/evening.html',
        controller: 'EveningCtrl'
      })
      .when('/evening2', {
        templateUrl: 'views/evening2.html',
        controller: 'Evening2Ctrl'
      })
      .when('/evening3', {
        templateUrl: 'views/evening3.html',
        controller: 'Evening3Ctrl'
      })
      .when('/evening4', {
        templateUrl: 'views/evening4.html',
        controller: 'Evening4Ctrl'
      })
      .when('/completedSurvey', {
        templateUrl: 'views/completedsurvey.html',
        controller: 'CompletedsurveyCtrl'
      })
      .when('/mockups', {
        templateUrl: 'views/mockups.html',
        controller: 'MockupsCtrl'
      })
      .when('/location_finder', {
        templateUrl: 'views/location_finder.html',
        controller: 'LocationFinderCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:EveningCtrl
 * @description
 * # EveningCtrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('EveningCtrl', function ($scope,$location,Submitdata) {

  	localStorage.setItem('surveyName','morning');
  	localStorage.setItem('sessionGUID',guid());

  	$scope.mood = 0;
  	$scope.alertness = 0;
  	$scope.social = 4;


  	$scope.submitForm = function(next_url){
    Submitdata.submit();
    console.log(next_url);  
    $location.path(next_url);
  	}

  });

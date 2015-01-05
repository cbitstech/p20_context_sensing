'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:MorningCtrl
 * @description
 * # MorningCtrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('MorningCtrl', function ($scope,$location,Submitdata) {

  	localStorage.setItem('surveyName','morning');
  	localStorage.setItem('sessionGUID',guid());

  $("input[type='time']").mobiscroll().time({theme:'android-ics'});


    $scope.mood = 0;
    $scope.alertness = 0;
    
  	$scope.questions = [
	  	{name:"bedtime", label:"What time did you go to bed last night?", type:"time"},
	  	{name:"waketime", label:"What time did you wake up this morning?", type:"time"},
      {name:"numTimesWaking", label:"How many times did you wake up during the night?", type:"number"},
  	];


  	$scope.submitForm = function(next_url){
        Submitdata.submit();
        console.log(next_url);
        $location.path(next_url);
  	}

  });

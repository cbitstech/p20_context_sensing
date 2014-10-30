'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:Evening3Ctrl
 * @description
 * # Evening3Ctrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('Evening4Ctrl', function ($scope,$location,Submitdata) {

  	$scope.active = 4;
    
  	$scope.questions = [
	  	{name:"total_places_visited", label:"How many places did you visit outside of your home and work today?", type:"number"},
	  	{name:"enjoyable_places_visited", label:"How many of these were places to do something enjoyable (i.e., movie theater, restaurant, park, concert, etc.)?", type:"number"},
	  	{name:"got_something_done_visited", label:"How many of these were places to get something done (i.e., shopping, bank, laundromat, other errands, etc.)?", type:"number"},
	  	{name:"exercise_visited", label:"How many of these were places to exercise (i.e., gym, outdoor space, etc.)?", type:"number"},
	  	{name:"spiritual_visited", label:"How many of these were places for spiritual activities (i.e., praying, worshipping, meditating)?", type:"number"}
  	];


  	$scope.submitForm = function(next_url){
    Submitdata.submit();
    console.log(next_url);  
    $location.path(next_url);
  	}


  });

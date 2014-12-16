'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:Evening2Ctrl
 * @description
 * # Evening2Ctrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('Evening2Ctrl', function ($scope,$location,Submitdata) {
    
  	$scope.questions = [
	  	{name:"total_people_interacted_with", label:"How many people did you interact with today?", type:"number"},
	  	{name:"num_friends_interacted_with", label:"How many of these people were friends?", type:"number"},
	  	{name:"num_family_members_interacted_with", label:"How many of these people were family members?", type:"number"},
	  	{name:"num_coworkers_interacted_with", label:"How many of these people were co-workers?", type:"number"}
  	];


  	$scope.submitForm = function(next_url){
    Submitdata.submit();
    console.log(next_url);  
    $location.path(next_url);
  	}

  });

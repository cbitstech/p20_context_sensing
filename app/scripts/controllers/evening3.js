'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:Evening3Ctrl
 * @description
 * # Evening3Ctrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('Evening3Ctrl', function ($scope,$location,Submitdata) {

  	$scope.questions = [
	  	{name:"total_interactions", label:"How many interactions did you have with people today?", type:"number"},
	  	{name:"num_friends_interactions", label:"How many of these interactions were with friends?", type:"number"},
	  	{name:"num_family_members_interactions", label:"How many of these interactions were with family members?", type:"number"},
	  	{name:"num_coworkers_interactions", label:"How many of these interactions were with co-workers?", type:"number"}
  
  	];

  	$scope.submitForm = function(next_url){
    Submitdata.submit();
    console.log(next_url);  
    $location.path(next_url);
  	}


  });

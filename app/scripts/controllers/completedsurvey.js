'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:CompletedsurveyCtrl
 * @description
 * # CompletedsurveyCtrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('CompletedsurveyCtrl', function ($scope, $sanitize) {
    
  	if (localStorage.surveyName = 'morning'){
	    if(localStorage['num_morning_surveys'] == undefined){
	    	localStorage['num_morning_surveys'] = 1;
	    }	    
	    else{
	    		localStorage['num_morning_surveys'] = JSON.parse(localStorage['num_morning_surveys'])+1;
	    }
    }

    if (localStorage.surveyName = 'evening'){
	    if(localStorage['num_evening_surveys'] == undefined){
	    	localStorage['num_evening_surveys'] = 1;
	    }	    
	    else{
	    		localStorage['num_evening_surveys'] = JSON.parse(localStorage['num_morning_surveys'])+1;
	    }
    }


    if(localStorage['num_evening_surveys'] !== undefined){
    	$scope.num_evening_surveys_report = '<h3>Number of evening surveys completed:</h3>' + localStorage['num_evening_surveys'];
    }

    if(localStorage['num_morning_surveys'] !== undefined){
    	$scope.num_morning_surveys_report = '<h3>Number of morning surveys completed:</h3>' + localStorage['num_morning_surveys'];
    	
    }



    localStorage.removeItem('sessionGUID');
    localStorage.removeItem('surveyName');
    


  });

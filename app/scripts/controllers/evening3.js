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
	  	{name:"num_coworkers_interactions", label:"How many of these interactions were with co-workers?", type:"number"},
      {
          name:"activity_level", //goes to the server
          label:"How active were you?", //question presented to user
          labelStyles:"", //lets you add CSS to the label
          type:"range",
          styles:"",
          visibleMin:1,
          visibleMax:10,
          actualMin:3,
          actualMax:7,
          showUnavailableRange:true,
          showUnavailableRangeStyles:'',
          stepSize:1,
          responseRequired:'required',
          value:4,
          ticks:[3,4,5,6,7],
          optionRangeStyles:'margin-top:-8px;',
          optionRanges:[ 
            {label:'Bottom', class:'alert-danger', widthPercentage:30, styles:''},
            {label:'Middle', class:'alert-warning', widthPercentage:40, styles:''},
            {label:'Top', class:'alert-success', widthPercentage:30, styles:''}
          ] 
      }
  	];

    //some notes about the slider
    //in an effort to keep it as flexible as possible a few pass-through functions were added
    //optionRangeStyles refers to the ability to pass arbitrary CSS through to the page for the whole color range
    //optionRanges refers to each sub range, the 'class' feature is really just allowing a passthrough for bootstrap color styles which can be viewed at: http://getbootstrap.com/css/#buttons
    //styles in general allow passthrough of CSS to the range template made
    //ticks refer to VISIBLE not to actual


  	$scope.submitForm = function(next_url){
    Submitdata.submit();
    console.log(next_url);  
    $location.path(next_url);
  	}


  });

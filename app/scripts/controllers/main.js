'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the p20ContextSensingApp
 */
 angular.module('p20ContextSensingApp')
 .controller('MainCtrl', function ($scope, $location) {

  //  var launchRoute = function(){(new PurpleRobot()).fetchEncryptedString('gotoOnAppStart').execute({
  //    done: function(payload){
  //     $scope.gotoOnAppStart = payload;}
  //     , 
  //     fail: function(error){ 
    //    console.log(error);
    //    $scope.gotoOnAppStart = '/';
    //  }
    // });}
  
  // PurpleRobot = {};

  $scope.showHome = true;

  if (localStorage.getItem("userId") == undefined){
    $scope.userExists = false
  }
  else{
    $scope.userExists = true;
  }


  //  if ($scope.gotoOnAppStart == '/'){
  //   $scope.showHome = true
  // } else{
  //   $scope.showHome = false
  // }

  // (new PurpleRobot()).setUserId('p20ContextSensingApp').execute();



  $scope.createUser = function(){

    localStorage.setItem("userId", $("input[name=userId").val());
    localStorage.setItem("amPromptTime", $("input[name=amprompttime").val())
    localStorage.setItem("pmPromptTime", $("input[name=pmprompttime").val())

    var amTriggerDateTime = new Date();
    var pmTriggerDateTime = new Date();
    
    amTriggerDateTime.setHours($("input[name=amprompttime").val().split(":")[0]);
    amTriggerDateTime.setMinutes($("input[name=amprompttime").val().split(":")[1]);
    pmTriggerDateTime.setHours($("input[name=pmprompttime").val().split(":")[0]);
    pmTriggerDateTime.setMinutes($("input[name=pmprompttime").val().split(":")[1]);

    console.log(amTriggerDateTime,pmTriggerDateTime);


    var amTriggerTime = (new PurpleRobot()).formatDate(amTriggerDateTime).toString();
    var pmTriggerTime = (new PurpleRobot()).formatDate(pmTriggerDateTime).toString();

    var pr = new PurpleRobot();

    var dialog = 
    pr.showNativeDialog({
      title: "P20",
      message: "Can you answer a few questions?",
      buttonLabelA: "Yes",
      scriptA: pr.launchApplication('edu.northwestern.cbits.p20cs'),
      buttonLabelB: "No",
      scriptB: pr.emitToast("Thanks, we will check in later!"),
      tag: "p20d",
      priority: 3
    });



    (new PurpleRobot()).updateTrigger({ script: dialog, startAt: amTriggerTime, endAt: amTriggerTime}).execute();
    (new PurpleRobot()).updateTrigger({ script: dialog, startAt: pmTriggerTime, endAt: pmTriggerTime}).execute();


    $location.path('#/');
  }

});
'use strict';

/**
 * @ngdoc service
 * @name p20ContextSensingApp.Submitdata
 * @description
 * # Submitdata
 * Service in the p20ContextSensingApp.
 */
angular.module('p20ContextSensingApp')
  .service('Submitdata', function Submitdata() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = {};

    service.submit = function(next_url){
     // 	var pr = new PurpleRobot();
     //    var user = localStorage['userId'];
     //    var session = localStorage['sessionGUID'];
     //    var surveyName = localStorage['surveyName'];
  			// $.each($('form').serializeArray(), function(idx,el){
     //      var payload_to_send = {user:user,surveyName:surveyName,session:session,name:el.name,value:el.value};
     //      (new PurpleRobot()).emitReading('surveydata',payload_to_send).execute();
     //    });
    };

    return service

  });

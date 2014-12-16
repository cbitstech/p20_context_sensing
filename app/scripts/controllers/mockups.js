'use strict';

/**
 * @ngdoc function
 * @name p20ContextSensingApp.controller:MockupsCtrl
 * @description
 * # MockupsCtrl
 * Controller of the p20ContextSensingApp
 */
angular.module('p20ContextSensingApp')
  .controller('MockupsCtrl', function ($scope) {
    //SCOTT, FEEL FREE TO ADD ANY APP LOGIC HERE
		//Width and height
		console.log("mockups.js");
		var dataset = [ 5, 10, 15, 20, 25 ];
		var w = 500;
		var h = 50;
		var svg = d3.select("body")
            .append("svg")
            .attr("width", w)   // <-- Here
            .attr("height", h); // <-- and here!
		var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");
		circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       });




  });

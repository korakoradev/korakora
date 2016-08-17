'use strict';

/**
 * @ngdoc function
 * @name korakoradevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the korakoradevApp
 */
angular.module('korakoradevApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.name = "Main Controller";
  });

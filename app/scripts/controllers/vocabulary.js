'use strict';

/**
 * @ngdoc function
 * @name korakoradevApp.controller:VocabularyCtrl
 * @description
 * # VocabularyCtrl
 * Controller of the korakoradevApp
 */
angular.module('korakoradevApp')
  .controller('VocabularyCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.mode = "En2He";
    this.fromLabel = "Eng";
    this.toLabel   = "Heb";
    this.testText = "test";

    this.next = function() {
      this.testText = "next was clicked";
      console.log("here0");
      $http.get("http://www.bogotobogo.com/AngularJS/files/httpRequest/planet2.json").success(function(response) {
        console.log("here1");
        this.testText.names = response;
        console.log("here2");
      });
    };

    this.check = function() {
      this.testText = "check was clicked";
    };

    this.correct = function() {
      this.testText = "correct was clicked";
    };

    this.wrong = function() {
      this.testText = "wrong was clicked";
    };

  });

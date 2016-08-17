'use strict';

/**
 * @ngdoc overview
<<<<<<< HEAD
 * @name korakoraApp
 * @description
 * # korakoraApp
=======
 * @name korakoradevApp
 * @description
 * # korakoradevApp
>>>>>>> d6a1b8d83118c0679945414988fe0bea2c01aa58
 *
 * Main module of the application.
 */
angular
  .module('korakoraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/vocabulary', {
        templateUrl: 'views/vocabulary.html',
        controller: 'VocabularyCtrl',
        controllerAs: 'vocabulary'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

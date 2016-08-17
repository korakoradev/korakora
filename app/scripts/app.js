'use strict';

/**
 * @ngdoc overview
 * @name korakoradevApp
 * @description
 * # korakoradevApp
 *
 * Main module of the application.
 */
angular
  .module('korakoradevApp', [
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

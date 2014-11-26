'use strict';

/**
 * @ngdoc overview
 * @name proyectoVeterinariaApp
 * @description
 * # proyectoVeterinariaApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoVeterinariaApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/registrar',{
        templateUrl: 'views/registrarcliente.html',
        controller: 'registrarcliente.js'
      })
      .when('/vercliente',{
        templateUrl: 'views/vercliente.html',
        controller: 'vercliente.js'
      })
      .when('/nconsulta',{
        templateUrl: 'views/nuevaconsulta.html',
        controller: 'nuevaconsulta.js'
      })
      .when('/nmascota',{
        templateUrl: 'views/nuevamascota.html',
        controller: 'nuevamascota.js'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

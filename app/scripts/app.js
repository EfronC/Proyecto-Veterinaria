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
      .when('/icomida',{
        templateUrl: 'views/icomida.html',
        controller: 'icomida.js'
      })
      .when('/iproductos',{
        templateUrl: 'views/iproductos.html',
        controller: 'iproductos.js'
      })
      .when('/mvacunas',{
        templateUrl: 'views/mvacunas.html',
        controller: 'mvacunas.js'
      })
      .when('/mantibioticos',{
        templateUrl: 'views/mantibioticos.html',
        controller: 'mantibioticos.js'
      })
      .when('/manalgesicos',{
        templateUrl: 'views/manalgesicos.html',
        controller: 'manalgesicos.js'
      })
      .when('/vcomida',{
        templateUrl: 'views/vcomida.html',
        controller: 'vcomida.js'
      })
      .when('/vproductos',{
        templateUrl: 'views/vproductos.html',
        controller: 'vproductos.js'
      })
      .when('/vmedicina',{
        templateUrl: 'views/vmedicina.html',
        controller: 'vmedicina.js'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

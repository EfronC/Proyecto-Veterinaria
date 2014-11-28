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
        controller: 'RegistrarClienteCtrl'
      })
      .when('/vercliente',{
        templateUrl: 'views/vercliente.html',
        controller: 'VerClienteCtrl'
      })
      .when('/nconsulta',{
        templateUrl: 'views/nuevaconsulta.html',
        controller: 'NuevaConsultaCtrl'
      })
      .when('/nmascota',{
        templateUrl: 'views/nuevamascota.html',
        controller: 'NuevaMascotaCtrl'
      })
      .when('/icomida',{
        templateUrl: 'views/icomida.html',
        controller: 'IComidaCtrl'
      })
      .when('/iproductos',{
        templateUrl: 'views/iproductos.html',
        controller: 'IProductosCtrl'
      })
      .when('/mvacunas',{
        templateUrl: 'views/mvacunas.html',
        controller: 'MVacunasCtrl'
      })
      .when('/mantibioticos',{
        templateUrl: 'views/mantibioticos.html',
        controller: 'MAntibioticosCtrl'
      })
      .when('/manalgesicos',{
        templateUrl: 'views/manalgesicos.html',
        controller: 'MAnalgesicosCtrl'
      })
      .when('/vcomida',{
        templateUrl: 'views/vcomida.html',
        controller: 'VComidaCtrl'
      })
      .when('/vproductos',{
        templateUrl: 'views/vproductos.html',
        controller: 'VProductosCtrl'
      })
      .when('/vmedicina',{
        templateUrl: 'views/vmedicina.html',
        controller: 'VMedicinaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

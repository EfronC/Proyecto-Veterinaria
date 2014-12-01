'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('NuevaMascotaCtrl',function ($scope){
		$scope.vacs = [
			{vacuna:'Vacuna1'},
			{vacuna:'Vacuna2'},
			{vacuna:'Vacuna3'}
		];

		$scope.especs = [
			{especie:'Can'},
			{especie:'Felino'},
			{especie:'Ave'}
		];

		$scope.vac = $scope.vacs[0];
		$scope.tex = '';
		$scope.clienteid = '';
		$scope.espec = $scope.especs[0];
		$scope.nombre = '';

	});
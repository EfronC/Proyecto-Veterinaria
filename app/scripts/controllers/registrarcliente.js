'use strict';

angular.module('proyectoVeterinariaApp').controller('RegistrarClienteCtrl', function ($scope) {
	$scope.number = 2;

	$scope.vac = [
		{Vaccine:'Vacuna1'},
	];

	$scope.addVaccine = function () {
		$scope.vac.push({Vaccine:''});
	};
});
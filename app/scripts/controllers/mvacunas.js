'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('MVacunasCtrl',function ($scope){
		$scope.vacunas = [
			{vacuna:'Pedigree Adulto 5kg', precio:50, cantidad:12},
			{vacuna:'Pedigree Bebe 2kg',precio:30, cantidad:15},
			{vacuna:'Purina Bebe 2kg',precio:40, cantidad:5}
		];

		$scope.sort = [
			{nombre:'Nombre', tipo:'name'},
			{nombre:'Cantidad(mas)', tipo:'-cantidad'},
			{nombre:'Cantidad(menos)', tipo:'cantidad'}
		];

		$scope.search='';
		$scope.ord = $scope.sort[0];
	});
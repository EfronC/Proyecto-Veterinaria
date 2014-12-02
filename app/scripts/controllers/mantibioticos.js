'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('MAntibioticosCtrl',function ($scope){
		$scope.antibioticos = [
			{antibiotico:'Pedigree Adulto 5kg', precio:50, cantidad:12},
			{antibiotico:'Pedigree Bebe 2kg',precio:30, cantidad:15},
			{antibiotico:'Purina Bebe 2kg',precio:40, cantidad:5}
		];

		$scope.search='';
	});
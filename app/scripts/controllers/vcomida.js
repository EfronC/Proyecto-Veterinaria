'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('VComidaCtrl',function ($scope){
		$scope.comidas = [
			{comida:'Pedigree Adulto 5kg', precio:50, cantidad:12},
			{comida:'Purina Adulto 5kg', precio:60, cantidad:10},
			{comida:'Pedigree Bebe 2kg',precio:30, cantidad:15},
			{comida:'Purina Bebe 2kg',precio:40, cantidad:5}
		];

		$scope.comi = $scope.comidas[0];
		$scope.cantidad=1;
		$scope.precio=$scope.comi.precio*$scope.cantidad;
	});
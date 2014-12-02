'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('VProductosCtrl',function ($scope){
		$scope.productos = [
			{producto:'Pelota', precio:50, cantidad:12},
			{producto:'Hueso de juguete', precio:60, cantidad:10},
			{producto:'Palitos de carne',precio:30, cantidad:15},
			{producto:'Jaula',precio:40, cantidad:5}
		];

		$scope.produ = $scope.productos[0];
		$scope.cantidad=1;
		$scope.precio=$scope.produ.precio*$scope.cantidad;
	});
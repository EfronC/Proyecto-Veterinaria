'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('VMedicinaCtrl',function ($scope){
		$scope.medicinas = [
			{medicina:'Medicina1', precio:50, cantidad:12},
			{medicina:'Medicina2', precio:60, cantidad:10},
			{medicina:'Medicina3',precio:30, cantidad:15},
			{medicina:'Medicina4',precio:40, cantidad:5}
		];

		$scope.medi = $scope.medicinas[0];
		$scope.cantidad=1;
		$scope.precio=$scope.medi.precio*$scope.cantidad;
	});
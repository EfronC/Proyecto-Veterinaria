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
		//$scope.precio=$scope.medi.precio*$scope.cantidad;

		$scope.verCantidad = function(){
			if($scope.medi.cantidad-$scope.cantidad < 0){
				return false;
			}else{
				return true;
			}
		};

		$scope.genDeuda = function(){
			$scope.precio = $scope.medi.precio*$scope.cantidad;
			if($scope.precio < 0){
				return 'error';	
			} else {
				return $scope.precio;
			}
		};

		$scope.verDeuda = function (){
			if($scope.precio<=0){
				return false;
			} else {
				return true;
			}
		};
	});
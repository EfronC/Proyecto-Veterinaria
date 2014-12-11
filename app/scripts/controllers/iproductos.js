'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('IProductosCtrl',function ($scope){
		$scope.productos = [
			{producto:'Pelota', precio:50, cantidad:12},
			{producto:'Hueso de juguete', precio:60, cantidad:10},
			{producto:'Palitos de carne',precio:30, cantidad:15},
			{producto:'Jaula',precio:40, cantidad:5}
		];

		$scope.sort = [
			{nombre:'Nombre', tipo:'name'},
			{nombre:'Cantidad(mas)', tipo:'-cantidad'},
			{nombre:'Cantidad(menos)', tipo:'cantidad'}
		];

		$scope.search='';
		$scope.ord = $scope.sort[0];
	});
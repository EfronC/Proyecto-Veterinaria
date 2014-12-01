'use strict';

angular.module('proyectoVeterinariaApp')
	.controller('NuevaConsultaCtrl',function ($scope){
		$scope.opts = [
			{option:'Servicio'},
			{option:'Revision'},
			{option:'Vacuna'},
			{option:'Cirugia'}
		];

		$scope.servs = [
			{servicio:'Baño', precio:'$X'},
			{servicio:'Corte', precio:'$Y'},
			{servicio:'Baño-Corte', precio:'$Z'}
		];

		$scope.revis = [
			{revision:'Normal', precio:'$X'},
			{revision:'Problema', precio:'$Y'},
			{revision:'Enfermedad', precio:'$Z'}
		];

		$scope.cirs = [
			{cirugia:'Programada', precio:'$X'},
			{cirugia:'Emergencia', precio:'$Y'},
			{cirugia:'Traumatológica', precio:'$Z'}
		];

		$scope.vacs = [
			{vacuna:'Vacuna1', precio:'$X'},
			{vacuna:'Vacuna2', precio:'$Y'},
			{vacuna:'Vacuna3', precio:'$Z'}
		];

		$scope.opt = $scope.opts[0];
		$scope.serv = $scope.servs[2];
		$scope.revi = $scope.revis[0];
		$scope.cir = $scope.cirs[0];
		$scope.vac = $scope.vacs[0];

		function addZero(i) {
  			if (i < 10) {
        		i = '0' + i;
	    	}
    		return i;
		}

		function addTime() {
			var a = new Date();
			var b = addZero(a.getHours());
			var c = addZero(a.getMinutes());
			var d = addZero(a.getSeconds());
			var tim = b+':'+c+':'+d;
			return tim;
		}

		$scope.date = addTime();

	});
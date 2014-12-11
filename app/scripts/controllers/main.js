'use strict';

/**
 * @ngdoc function
 * @name proyectoVeterinariaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoVeterinariaApp
 */
angular.module('proyectoVeterinariaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.animales = [
    	{especie:'Can', observacion:'El perro o perro doméstico (Canis lupus familiaris) es un mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo (Canis lupus). Un estudio publicado por la revista de divulgación científica Nature revela que, gracias al proceso de domesticación, el organismo del perro se ha adaptado a cierta clase de alimentos, en este caso el almidón. Su tamaño o talla, su forma y pelaje es muy diverso según la raza. Posee un oído y olfato muy desarrollados, siendo este último su principal órgano sensorial. En las razas pequeñas puede alcanzar una longevidad de cerca de 20 años, con atención esmerada por parte del propietario, de otra forma su vida en promedio es alrededor de los 15 años.'},
    	{especie:'Felino', observacion:'El gato o gato doméstico (Felis silvestris catus) es una subespecie de mamífero carnívoro de la familia Felidae. El gato está en convivencia cercana al ser humano desde hace unos 9500 años, periodo superior al estimado anteriormente, que oscilaba entre 3500 y 8000 años.'},
    	{especie:'Ave', observacion:'Las aves son animales vertebrados, de sangre caliente, que caminan, saltan o se mantienen solo sobre las extremidades posteriores, mientras que las extremidades anteriores están modificadas como alas que, al igual que muchas otras características anatómicas únicas, son adaptaciones para volar, aunque no todas vuelan. Tienen el cuerpo recubierto de plumas y, las aves actuales, un pico córneo sin dientes. Para reproducirse ponen huevos, que incuban hasta su eclosión.'}
    ];

    $scope.animal = $scope.animales[0];
  });

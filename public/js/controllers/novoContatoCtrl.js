angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, serialGenerator, $location, operadoras){
$scope.app = "Lista Telefonica";
$scope.operadoras = [];

	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).then(function(response){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};
});
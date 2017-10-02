angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;

	var init = function(){
		calcularImpostos($scope.contatos);
		generateSerial($scope.contatos);
	};

	var calcularImpostos = function(contatos){
		contatos.forEach(function(contato){
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
		});
	}

	var generateSerial = function(contatos){
		contatos.forEach(function(item){
			item.serial = serialGenerator.generate();
		});
	};
	
	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).then(function(response){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado) return contato;
		});
		$scope.isContatoSelecionado($scope.contatos);
	};
	
	$scope.isContatoSelecionado = function(contatos){
		$scope.hasContatoSelecionado = contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	var calcularImposto = function(preco){
		var imposto = 1.2;
		return preco * imposto;
	};

	init();
});
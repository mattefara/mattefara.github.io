

(function() {
    'use strict';
	angular.module('myApp', ['ngMaterial', 'ui.router', 'ngMessages']); // Registriamo l'applicazione ed includiamo la libreria Material
	angular.module('myApp').controller('FormControlloSquadra', FormCtrl); // Registriamo il controller

	
	angular.module('myApp').service("$squadService",SquadService);
    angular.module('myApp').directive("myValidName", myValidName); // Registriamo la direttiva


	


	angular.module('myApp').constant('SQUADRA', {nomeSquadra: "a", nomeCitta: ""})
	


	FormCtrl.$inject = ['$squadService', 'SQUADRA','$location', "$window"];
	function FormCtrl($squadService, SQUADRA, $location, $window){
		var vm = this;
		
		vm.salvaSquadra = salvaSquadra;
		vm.squadraVuota = squadraVuota;

		squadraVuota();
		
		
		function salvaSquadra(){
			console.log("salva");
			//$squadService.aggiungiSquadra();
			console.log($location, $window.location)
			sessionStorage.setItem("nomeCitta", vm.nomeCitta)
			sessionStorage.setItem("nomeSquadra", vm.nomeSquadra)
			console.log("vm -->",vm)
		}
		
		function squadraVuota(){
			var nuovaSquadra = $squadService.inizializzaSquadra;
			vm.nomeSquadra = nuovaSquadra.nomeSquadra;
			vm.nomeCitta = nuovaSquadra.nomeCitta;
			console.log($squadService)
			console.log("nuovo")
			console.log("vm -->",vm)
		}
		
	}

	function hide(){
		console.log(this)
	}

	function SquadService(SQUADRA){
		this.inizializzaSquadra	= inizializzaSquadra;


		function inizializzaSquadra(){
			return angular.copy(SQUADRA)
		}

		function aggiungiSquadra(){
			console.log("x")
		}
	}		

	function FormGiocatore(){
		vx = this;
		vx.hide = false
		angular.element( document.querySelector( '#squadra' ) ).addClass("ng-hide")
		console.log("vx ->",vx)
	}

	 myValidName.$inject = [];
    function myValidName() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {

                //For DOM -> model validation
                ngModel.$parsers.push(function (value) {
                    var valid = checkValue(value);
                    ngModel.$setValidity('myvalidname', valid);
                    return value;
                });

                //For model -> DOM validation
                ngModel.$formatters.push(function (value) {
                    ngModel.$setValidity('myvalidname', checkValue(value));
                    return value;
                });
				
				function checkValue(value) {
					return !(/\d/.test(value));
				}
            }
        };
    };
})();
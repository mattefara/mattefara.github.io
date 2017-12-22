(function() {
    'use strict';
	angular.module('myApp', ['ngMaterial', 'ngMessages']); // Registriamo l'applicazione ed includiamo la libreria Material
    angular.module('myApp').controller('ListsCtrl', ListsCtrl); // Registriamo il controller
    angular.module('myApp').controller('FormCtrl', FormCtrl); // Registriamo il controller
    angular.module('myApp').controller('ToolbarCtrl', ToolbarCtrl); // Registriamo il controller
    angular.module('myApp').service('$PlayersSvc', PlayersSvc); // Registriamo il service
	
	/* Filtro personalizzato che mostra la prima lettera di una stringa in maiuscolo */
	angular.module('myApp').filter('capitalizeFirstLetter', capitalizeFirstLetter);
    
	/* Costante con i default di creazione dell'utente */
	angular.module('myApp').constant('PLAYER_DEFAULT', { Nome: '', AnnoDiNascita : "", Under20: false, Maglia: "" });
	
	/* Controller che gestisce la lista dei giocatori */
	ListsCtrl.$inject = ['$PlayersSvc'];
	function ListsCtrl($PlayersSvc) {
		var vm = this;
		
		vm.listPlayer = $PlayersSvc.getList;
				
		// Controllo il tipo di ruolo, se è Playmaker, Guardia e Ala allora è esterno, altrimenti interno.
	
	}

	/* Controller che gestisce la form di inserimento */
	FormCtrl.$inject = ['$PlayersSvc'];
	function FormCtrl($PlayersSvc) {
		var vm = this;
		
		/* API Pubbliche */
		vm.newPlayer = newPlayer;
		vm.savePlayer = savePlayer;
		vm.nomeCitta = sessionStorage.getItem("nomeCitta")
		vm.nomeSquadra = sessionStorage.getItem("nomeSquadra")
		
		/* Inizializzazione */
		newPlayer(); // Inizializzo la form
		
		/* Funzione che si occupa di generare il nuovo giocatore */
		function newPlayer() {
			console.log("nuovo")
			vm.Player = $PlayersSvc.initializePlayer(); // Inizializzo il giocatore 
			console.log(vm)
		}
	
		function savePlayer() {
			console.log("salva")
			$PlayersSvc.addPlayer(vm.Player);
			newPlayer();
		}
	}
	
	/* Controller che gestisce la toolbar */
	ToolbarCtrl.$inject = ['$PlayersSvc'];
	function ToolbarCtrl($PlayersSvc) {
		var vm = this;
		vm.refresh = refresh; 
		
		function refresh() {
			$PlayersSvc.clearList();
		}
	}
	
	/* Servizio di gestione degli utenti */
	PlayersSvc.$inject = ['PLAYER_DEFAULT'];
	function PlayersSvc(PLAYER_DEFAULT) {
		
		var ListPlayers = [];
		
		/* API Pubbliche */
		this.initializePlayer = initializePlayer;
		this.addPlayer = addPlayer;
		this.getList = getList;
		this.clearList = clearList;
		
		// Funzione che ritorna la lista dei ruoli disponibili
		function initializePlayer() {
			return angular.copy(PLAYER_DEFAULT);
		}
	
		function addPlayer(Player) {
			if (angular.isObject(Player)) {
				
				ListPlayers.push(Player);
			} else {
				alert("mmmm")
			}
		}
	
		function getList() {
			return ListPlayers;
		}
	
		function clearList() {
			ListPlayers = [];
		}
	
	
	}
	
	/* Funzione di filtro, ritorna una funzione con input il valore da filtrare */
	function capitalizeFirstLetter() {
        return function (input) {
            if (input) {
				// se è stato passato un valore allora il primo Carattere deve essere maiuscolo, tutti gli altri minuscoli
                return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            }
            return '';
        }
    }

	/* Direttiva che controllo se il cognome è accettabile */
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
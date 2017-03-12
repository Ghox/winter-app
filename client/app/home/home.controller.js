'use strict';

(function () {
    angular.module('winter').controller('HomeController', HomeController);
    HomeController.$inject = ['item', '$scope'];
    function HomeController(item, $scope) {
    	var vm = this;
    	vm.item = {};
    	vm.allDisabled = false;
             vm.showError = false;
    	vm.items = item.query();
    	vm.createItem = function createItem(name, form){
                    vm.allDisabled = true;
    	       var newItem = new item();
    	       newItem.name = vm.item.name;
    	       newItem.amount = vm.item.amount;
    	       newItem.$save()
                        .then(
                            function(addedItem){ 
                                vm.items.push(addedItem);
                                resetForm(form);
                                resetContext();
                        },handleError);
    	};

    	vm.deleteItem = function(item){
                 vm.allDisabled = true;
	     item.$delete()
                    .then(function(response){
                        var index = vm.items.indexOf(item);
                        vm.items.splice(index, 1);    
                       resetContext();
                    }, handleError);
    	};

            vm.updateItem = function(item){
                vm.allDisabled = true;
                item.$update()
                    .then(function(updatedItem){
                        resetContext();
                     },handleError);
            }

            function handleError(){
                vm.showError = true;
                 resetContext();
            }

            function resetContext(){
                vm.allDisabled  = false;
            }

    	function resetForm(form){
                  vm.item = {};
                  form.$setPristine();
                  form.$setUntouched();
    	};



    }

})();
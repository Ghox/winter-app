'use strict';

(function () {
    angular.module('winter').controller('HomeController', HomeController);
    HomeController.$inject = ['item'];
    function HomeController(item) {

        //ng-change="humanitarian.getGallery()"
    	var vm = this;
    	vm.item = {};
    	vm.allDisabled = false;
             vm.showError = false;
             vm.currentPage = 1;
             vm.itemsPerPage = 4;

    	vm.createItem = function createItem(name, form){
                    vm.allDisabled = true;
    	       var newItem = new item();
    	       newItem.name = vm.item.name;
    	       newItem.amount = vm.item.amount;
    	       newItem.$save()
                        .then(
                            function(addedItem){ 
                                vm.itemPagination();
                                resetForm(form);
                                resetContext();
                        },handleError);
    	};

    	vm.deleteItem = function(item){
                 vm.allDisabled = true;
	     item.$delete()
                    .then(function(response){
                       vm.itemPagination();
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

            vm.itemPagination =  function itemPagination(){
                var skip = (vm.currentPage - 1) * vm.itemsPerPage;
                vm.getItems(skip, vm.itemsPerPage);
            }

            function getTotalItems(){
                item.count( function(response){
                vm.totalItems = response.total;
              });
            }

            vm.getItems = function getItems(skip, limit){
                var params = {
                    skip:skip,
                    limit:limit
                };
                vm.items = item.query(params);
            }

            function init(){
                vm.itemPagination();
                getTotalItems();
            }

            init();


    }

})();
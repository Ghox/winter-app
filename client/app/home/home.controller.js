(function () {
    angular.module('winter').controller('HomeController', HomeController);
    HomeController.$inject = ['item'];
    function HomeController(item) {
    	var vm = this;
    	vm.item = {};
    	vm.allDisabled = false;
    	vm.items = item.query(function(items){
    		/*item.get({ id:vm.items[0]._id },function(item){
    			console.log(item);
    		});*/
    	});
    	vm.createItem = function createItem(name){
    		var newItem = new item();
    		newItem.name = vm.item.name;
    		newItem.amount = vm.item.amount;
    		newItem.$save(function(addedItem){
    			vm.allDisabled = false;
    			vm.items.push(addedItem);
    		});
    	};

    	vm.deleteItem = function(item){
    		item.$delete(function(response){
    			var index = vm.items.indexOf(item);
  			vm.items.splice(index, 1);    
    		});
    	};

    	vm.reset = function(){
    		console.log("hover");
    	};

    }

})();
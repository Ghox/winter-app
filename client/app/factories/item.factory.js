'use strict';

(function () {
        angular.module('winter').factory('item', item);
        item.$inject = ['$resource'];
        function item($resource) {
                return $resource('/api/item/:id', { id: '@_id' },  
                	{
                	    'count':{method:'GET', url:'/api/item/count'},  
                	    'update': { method:'PUT' }, 
                	    'query': {method:'GET', url:'/api/item/:skip/:limit', isArray:true}
                	});
        }
    })();

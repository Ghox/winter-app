

(function () {
        angular.module('winter').factory('item', item);
        item.$inject = ['$resource'];
        function item($resource) {
               /* var service = {};
                service = $resource('/api/item/:id', { id: '@_id' }, {'update': {method: 'PUT'}});
                return service;
                */

                return $resource('/api/item/:id', { id: '@_id' }, {'update': {method: 'PUT'}});

        }
    })();

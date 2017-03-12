'use strict';

(function () {
        angular.module('winter').factory('item', item);
        item.$inject = ['$resource'];
        function item($resource) {
                return $resource('/api/item/:id', { id: '@_id' }, {'update': {method: 'PUT'}});
        }
    })();

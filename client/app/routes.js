'use strict';

angular.module('winter')
	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl: 'app/home/home.html',
	        controller: 'HomeController',
	        controllerAs: 'home'
	    }).otherwise({redirectTo: '/'});
}]);
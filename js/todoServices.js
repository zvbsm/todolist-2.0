'use strict';

var todoServices = angular.module('todoServices',[])
.factory('getListService', function($http) {
	return $http.get('json/items.json');
});
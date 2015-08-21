'use strict';

var todoCtrls = angular.module('todoCtrls', ['todoServices']);

todoCtrls.controller('itemsCtrl', function($scope, getListService) {

$scope.items = null;
getListService.success(function(data) {
	$scope.items = data;
});

	$scope.addItem = function() {
		if ($scope.newTitle) {
				var clr = 0;
				var created = new Date();
				
				if(!$scope.newColor || $scope.newColor === '') {
					$scope.newColor = 'white';
				};

				if($scope.newColor === 'red') {clr = 0};
				if($scope.newColor === 'yellow') {clr = 1};
				if($scope.newColor === 'green') {clr = 2};
				if($scope.newColor === 'white') {clr = 3};

			$scope.items.push({
				title: $scope.newTitle,
				color: $scope.newColor,
				date: created.getTime(),
				orderColor: clr
			});
		};
		$scope.newTitle = '';
		$scope.newColor = 'white';
	};

		//clickMode determines if task should be deleted or change color when clicked on
		//true = delete
		//false = change color
	$scope.toggleClickMode = function() {
		if($scope.clickMode = false || !$scope.clickMode) {
			$scope.clickMode = true;	
		}else {$scope.clickMode = false;};

console.log('delete is ' + $scope.clickMode);

	};
	$scope.deleteItem = function(thisItem) {
		var index = $scope.items.indexOf(thisItem);
		$scope.items.splice(index, 1);
	};
	$scope.chngColor = function(thisColor, thisItem) {
		var index = $scope.items.indexOf(thisItem);
		$scope.items[index].orderColor++;
		if($scope.items[index].orderColor > 3) {$scope.items[index].orderColor = 0};
		if(thisColor === 'red') {$scope.items[index].color = 'yellow';};
		if(thisColor === 'yellow') {$scope.items[index].color = 'green'};
		if(thisColor === 'green') {$scope.items[index].color = 'white'};
		if(thisColor === 'white') {$scope.items[index].color = 'red'};
	};
	$scope.clickModeAction = function(thisColor, thisItem) {
		if($scope.clickMode === true) {
			$scope.deleteItem(thisItem);
		}else{$scope.chngColor(thisColor, thisItem)};
	};

	$scope.orderList = function() {
		if($scope.orderMode === 'date' || !$scope.orderMode) {
			$scope.orderMode = 'orderColor';
		}else{$scope.orderMode = 'date'};

console.log('order by ' + $scope.orderMode);

	};
});
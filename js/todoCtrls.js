var todoCtrls = angular.module('todoCtrls', []);

todoCtrls.controller('itemsCtrl', ['$scope', function($scope) {
	$scope.items = [
		{title: 'walk dog', color: 'red', date: 1439090155449, orderColor: 0},
		{title: 'groceries', color: 'white', date: 1439090155450, orderColor: 3},
		{title: 'program', color: 'green', date: 1439090155451, orderColor: 2},
		{title: 'sleep', color: 'yellow', date: 1439090155452, orderColor: 1}
		];

	$scope.addItem = function() {
		if ($scope.newTitle) {
				var clr;
				var created = new Date();

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
		if(thisColor === 'red') {$scope.items[index].color = 'yellow'};
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
}]);
var todoCtrls = angular.module('todoCtrls', []);

todoCtrls.controller('itemsCtrl', ['$scope', function($scope) {
	$scope.items = [
		{title: 'walk dog', color: 'red', order: '4'},
		{title: 'groceries', color: 'white', order: '1'},
		{title: 'program', color: 'green', order: '2'},
		{title: 'sleep', color: 'yellow', order: '3'}
		];

		$scope.addItem = function() {
			$scope.items.push(
				{
					title: $scope.newTitle,
					color: $scope.newColor,
					order: $scope.items.length
			});
			$scope.newTitle = '';
			$scope.newColor = 'white';
		};
}]);
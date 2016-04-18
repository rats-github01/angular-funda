angular.module('MyApp', [])
    .controller('Other2Ctrl', ['$scope', function($scope) {
        $scope.title = 'Other Slide 2...';
    }])
    .controller('RepeatCtrl', ['$scope', function($scope) {
        $scope.setColors = function() {
            $scope.values = ['Yellow', 'Blue', 'Green', 'Red', 'White'];
        };
        $scope.setStates = function() {
            $scope.values = ['CA', 'MA', 'NY', 'IL', 'NV']
        };
        $scope.getValues = function() {
            return $scope.values;
        }
    }]);
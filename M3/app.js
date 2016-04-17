angular.module('MyApp', [])

    .constant('VERSION', '1.1')

    .controller('HomeCtrl', ['$scope', function($scope) {
    //some controller code for the HomeCtrl
        $scope.title = 'Welcome to the HomePage';
}]);
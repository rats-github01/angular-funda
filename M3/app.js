angular.module('MyApp', ['ngRoute'])

    .constant('VERSION', '1.1')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'HomeCtrl',
            templateUrl: './home.html'
        })
        .when('/info', {
            controller: 'InfoCtrl',
            templateUrl: './info.html'
        });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
    //some controller code for the HomeCtrl
        $scope.title = 'Welcome to the HomePage';
        $scope.description = function() {
            return 'this is sample description';
        };
    }])
    .controller('InfoCtrl', ['$scope', function($scope) {
        $scope.title = 'Welcome to Info Page!';
    }]);
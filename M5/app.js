angular.module('MyApp', [])

    .controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('./users.json').success(function(users) {
           $scope.users = users;
        });
    }]);


/*
angular.module('MyApp', [])
    .factory('userService', function() {
        var user;
        return {
            setCurrentUser: function(current) {
                this.user = current;
            },
            getCurrentUser: function() {
                return user;
            }
        };
    })
    .controller('DetailCtrl', ['$scope', 'userService', function($scope, userService) {
        //You can use userService over here!
        console.log(userService.getCurrentUser());
    }])
    .controller('InfoCtrl', ['$scope', 'userService', function($scope, userService) {
        userService.setCurrentUser('us001');
    }])*/

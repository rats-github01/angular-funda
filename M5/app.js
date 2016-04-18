angular.module('MyApp', [])

    .factory('usersService', function() {
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

    .controller('ListCtrl', ['$scope', '$rootScope', '$http', 'usersService',
        function($scope, $rootScope, $http, usersService) {
        $http.get('./users.json').success(function(users) {
           $scope.users = users;
        });

        $scope.selectUser = function(user) {
          //alert('in selectUser func' + user.first_name);
          usersService.setCurrentUser(user);
            $rootScope.$broadcast('userChanged', user);
        };
    }])

    .controller('DetailCtrl', ['$scope', '$rootScope', 'usersService',
        function($scope, $rootScope, usersService) {
        $scope.$on('userChanged', function(event, user) {
           $scope.currentUser = user;//usersService.getCurrentUser();
        });
    }]);
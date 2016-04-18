angular.module('MyApp', [])
    .controller('Other2Ctrl', ['$scope', function($scope) {
        $scope.title = 'Other Slide 2...';
    }])
    .controller('FormCtrl', ['$scope', function($scope) {
        $scope.generateAges = function() {
            var ages = [];
            for(var i=18; i <= 60; i++){
                ages.push(i);
            }
            return ages;
        };
        $scope.submit = function() {
            //alert('Submitted');
          if($scope.myForm.$valid){
              alert('submitted');
          }  else {
              alert('invalid');
          }
        };
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
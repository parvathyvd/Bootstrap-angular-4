var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService', function() {

    var self = this;
    this.name = 'John Doe';

    this.namelength = function() {

        return self.name.length;

    };

});

myApp.controller('mainController', ['$scope', '$log','nameService', function($scope, $log, nameService) {

    $scope.name = nameService.name;
    $log.log(nameService.name);
    $log.log(nameService.namelength());

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

}]);

myApp.controller('secondController', ['$scope', '$log','nameService', function($scope, $log, nameService) {

  $scope.name = nameService.name;

  $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

}]);

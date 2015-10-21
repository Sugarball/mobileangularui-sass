"use strict";
angular.module('MAUIDemo.controllers.Main').controller('HomeController', function($scope){
        console.log('asd');
        $scope.name = "Jayden";
        $scope.title = `Hello ${$scope.name}`;
});
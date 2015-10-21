"use strict";
angular.module('MAUIDemo.controllers.Main')

.controller('TestController', function($scope){

        $scope.name = "test";
        $scope.title = `Hello ${$scope.name}`;
});
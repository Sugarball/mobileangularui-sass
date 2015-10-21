angular.module('MAUIDemo', [
  'ngRoute',
  'mobile-angular-ui',
  'MAUIDemo.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
        templateUrl:'home.html',
        controller : 'HomeController',
        reloadOnSearch: false
      })
      .when('/test', {
        templateUrl:'test.html',
        controller : 'TestController',
        reloadOnSearch: false
      });

});
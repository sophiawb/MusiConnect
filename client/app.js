var app = angular.module('app', [
  'app.services',
  'app.request',
  'app.user',
  'app.nav',
  'app.signin',
  'ngRoute'
]);

app.config(function($routeProvider){
  $routeProvider
    .when('/user/:username', { // TODO: how do we grab current user's name
      templateUrl: '/user/userView.html',
      controller: 'UserController'
    })
    .when('/requests', {
      templateUrl: 'request/requestView.html',
      controller: 'RequestController'
    })    
    .when('/signup', {
      templateUrl: 'signin/signup.html',
      controller: 'signinController'
    })    
    .when('/login', {
      templateUrl: 'request/login.html',
      controller: 'signinContoller'
    })
    .otherwise({redirectTo: '/user/eliot'}); // should redirect to /user/currentUserName

  });



var app = angular.module('app', [
  'app.services',
  'app.request',
  'app.user',
  'app.nav',
  'app.signin',
  'app.event',
  'ngRoute'
]);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.config(function($routeProvider){
  
  var requireAuthResolve = {
    "currentAuth": ["Auth", function(Auth) {
      return Auth.auth.$requireAuth();
    }]
  };

  $routeProvider
    .when('/user/:uid', { // TODO: how do we grab current user's name
      templateUrl: '/user/userView.html',
      controller: 'UserController',
      // resolve: requireAuthResolve
    })
    .when('/requests', {
      templateUrl: 'request/requestView.html',
      controller: 'RequestController',
      // resolve: requireAuthResolve
    })
    .when('/events', {
      templateUrl: 'event/eventView.html',
      controller: 'EventController',
      // resolve: requireAuthResolve
    })
    .when('/signup', {
      templateUrl: 'signin/signup.html',
      controller: 'signinController'
    })    
    .when('/login', {
      templateUrl: 'signin/login.html',
      controller: 'signinController'
    })
    .otherwise({redirectTo: '/user/eliot'
    }); // should redirect to /user/currentUserName
});



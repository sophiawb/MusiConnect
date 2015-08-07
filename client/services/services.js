angular.module('app.services', [])

  .directive('loggedin', [function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'nav/loggedinnav.html'
    }
  }])
  .directive('loggedout', [function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'nav/loggedoutnav.html'
    }
  }])
  .factory('Signin', ['$http', '$location', function($http, $location){
    
    // var signupUser = function(userObject){
    //   // send to firebase
    //   // var uid = UID from firebase
    //   console.log('user http request sent');
    //   $http.post('http://requestb.in/1h0kipc1', { // route will be '/api/users'
    //     UID: uid,
    //     talents: 
    //   }).then(function(response){
    //     console.log('user posted', response);
    //     $location.path('/'); // TODO: where should this lead to?
    //   }, function(err) {
    //     console.log('error posting user', err);
    //   }); 
    // };

    return {
      // signupUser: signupUser
    }
  }]);
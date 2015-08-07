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
  .factory('HttpRequests', ['$http', '$location', function($http, $location){
    
    var signupUser = function(userObject){
      // send to firebase
      // var uid = UID from firebase
      console.log('user http request sent', userObject);
      return $http({
        method: 'POST',
        url: 'http://requestb.in/1h0kipc1',
        data: userObject,
        headers: {
          'Content-Type': 'text/json'
        }
      }); // route will be '/api/users' 
    };

    var loginUser = function(){
      // do authentication login here, promisified
      // then redirect
      $location.path('/user');
    };

    var getUser = function(uid) {
      return $http({
        method: 'GET',
        url: 'http://requestb.in/1h0kipc1', // route will be '/api/users' + uid 
      });
      // .then( set username in localstorage?); 
    };

    var post    

    var getRequests = function(uid) { // optional filter by username
      var url;
      if (username !== undefined) {
        url = 'api/requests/' + uid;
      } else {
        url = 'api/requests/';
      }
      return $http({
        method: 'GET',
        url: url // route will be '/api/users' + uid 
      });
    };

    var postRequest = function(request){
      console.log('post request http request sent', request);
      return $http({
        method: 'POST',
        url: 'http://requestb.in/1h0kipc1',
        data: userObject,
        headers: {
          'Content-Type': 'text/json'
        }
      });
    }

    return {
      loginUser: loginUser
      signupUser: signupUser,
      getUser: getUser,
      getRequests: getRequests,
      postRequest: postRequest
    }
  }]);
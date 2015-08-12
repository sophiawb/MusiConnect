angular.module('app.services', ['firebase'])

  .directive('loggedin', [function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'nav/loggedinnav.html'
    };
  }])

  .directive('loggedout', [function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'nav/loggedoutnav.html'
    };
  }])

  .factory('Auth', ['$window', '$firebaseAuth',
    function($window,$firebaseAuth){

      var firebaseAppUrl = 'https://banal-conga-line.firebaseio.com';
      var ref = new Firebase(firebaseAppUrl);
      var auth = $firebaseAuth(ref);

      var authData = null;
      var error = null;

      var login = function(email, password){ 
        return auth.$authWithPassword({// ??
          email: email,
          password: password
        })
        });
      };

      var logout = function(){
        auth.$unAuth();
      };

      var signup = function(email, password){
        return auth.$createUser({
          email: email,
          password: password
        }).then(function(userData){
          // user created with userData.id
        }).catch(function(error){
          console.log("Signup failed:",error);
        })
      };

      var getUid = function(){
        return $window.localStorage.getItem('uid');
      };

      var isAuth = function(){
        return !!$window.localStorage.getItem('uid');
      };

      return {
        auth: auth,
        login: login,
        logout: logout,
        signup: signup,
        getUid: getUid,
        isAuth: isAuth
      };
    }
  ])

  .factory('HttpRequests', ['$http', '$location', function($http, $location){
    var hostUrl = 'http://localhost:8000/api';
    
    var signupUser = function(userObject){
      // send to firebase
      // var uid = UID from firebase
      console.log('user http request sent', JSON.stringify(userObject));
      return $http({
        method: 'POST',
        url: hostUrl + '/user',
        data: JSON.stringify(userObject),
        headers: {
          'Content-Type': 'application/json'
        }
      }); // route will be '/api/users' 
    };

    var loginUser = function(){
      // do authentication login here, promisified
      // then redirect
      $location.path('/user');
    };

    var getUser = function(uid) {
      console.log(uid);
      return $http({
        method: 'GET',
        url: hostUrl + '/user/' + uid, // route will be '/api/users' + uid 
      });
      // .then( set username in localstorage?); 
    }; 

    var getRequests = function(uid) { // optional filter by username
      var url;
      if (!username) {
        url = hostUrl + 'requests/' + uid;
      } else {
        url = hostUrl + 'requests';
      }
      return $http({
        method: 'GET',
        url: hostUrl + '/request'
      });
    };

    var postRequest = function(request){
      console.log('post request http request sent', request);
      return $http({
        method: 'POST',
        url: hostUrl + '/request',
        data: userObject,
        headers: {
          'Content-Type': 'text/json'
        }
      });
    };

    return {
      loginUser: loginUser,
      signupUser: signupUser,
      getUser: getUser,
      getRequests: getRequests,
      postRequest: postRequest
    };
  }]);
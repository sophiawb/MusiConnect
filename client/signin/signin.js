angular.module('app.signin', ['app.services'])

.controller('signinController', ['$scope', '$location', 'HttpRequests', 'Auth', '$window', function($scope, $location, HttpRequests, Auth, $window){
  $scope.user = {
    talents: [],
    links: []
  };

  $scope.newTalent = {};


  $scope.addTalent = function(){
    if ( $scope.newTalent.talent !== "" && $scope.newTalent.level !== ""){
      $scope.user.talents.push({
        talent: $scope.newTalent.talent,
        level: $scope.newTalent.level
      });
      $scope.newTalent.talent = "";
      $scope.newTalent.level = "";
    } else {
      // TODO: add a message that one of the forms is blank
    }
  };

  $scope.addLink = function(){
    if ($scope.newLink !== "") {
      $scope.user.links.push($scope.newLink);
      $scope.newLink = "";
    } else {
      // TODO: add a message that one of the forms is blank
    }
  };

  $scope.login = function(){
    Auth.login($scope.user.email, $scope.user.password)
    .then(function(authData){
      // login successful with user with ID: authData.uid
      $window.localStorage.setItem('uid', authData.uid);
      $location.path('/user/'+ authData.uid); // /user/UID
    }).catch(function(error){
      console.error("Firebase login failed:",error);
      $location.path('/login');
    });
  };

  $scope.signup = function() {
     $scope.user.talents = convertTalentsToObject();

     var email = $scope.user.email;
     var password = $scope.user.password;

     Auth.signup(email, password)
     .then(function(userData){
       console.log('line 42 signin', userData);
       $scope.user.uid = userData.uid;
       HttpRequests.signupUser($scope.user, userData)
       .then(function(response){
         $window.localStorage.setItem('uid', userData.uid);
         console.log('user posted', response);
         Auth.login(email, password);
         $location.path('/user/'+ userData.uid);
       }).catch(function(error) {
         console.log('error posting user', error);
         Auth.removeUser(email, password);
       }); 
     })
     .catch(function(error){
       console.log("Firebase signup failed:",error);
     });
   };


  var convertTalentsToObject = function() {
    var converted = {};
    for (var i = 0; i < $scope.user.talents.length; i++){
      converted[$scope.user.talents.talent] = $scope.user.talents.level; 
    }
    return converted;
  };
}]);
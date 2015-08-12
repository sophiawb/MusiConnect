angular.module('app.signin', ['app.services'])

.controller('signinController', ['$scope', '$location', 'HttpRequests', function($scope, $location, Signin){
  $scope.user = {
    talents: []
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
    }
    else {
      // TODO: add a message that one of the forms is blank
    }
  };

  $scope.signUp = function() {
    $scope.user.talents = convertTalentsToObject()
    console.log($scope.user);
    HttpRequests.signupUser($scope.user) // signupUser returns a promise
      .then(function(response){
        console.log('user posted', response);
        $location.path('/'); // TODO: where should this lead to?
      }, function(err) {
        console.log('error posting user', err);
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
angular.module('app.signin', ['app.services'])

.controller('signinController', ['$scope', 'Signin', function($scope, Signin){
  $scope.user = {
    talents: []
  };

  $scope.newTalent = {};

  $scope.addTalent = function(){
    if ( $scope.newTalent.talent !== "" && $scope.newTalent.level !== ""){
      $scope.user.talents.push({
      talent: $scope.newTalent.talent,
      level: $scope.newTalent.level}
    });
    $scope.newTalent.talent = "";
    $scope.newTalent.level = "";
  };

  $scope.signUp = function() {
    // Signin.signupUser($scope.user);
  };

}]);
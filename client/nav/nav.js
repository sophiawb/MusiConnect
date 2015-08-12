angular.module('app.nav',[])
.controller('loggedInNavController', ['$scope','$location', function($scope, $location){
  $scope.showme = false;
  
  $scope.request = {};

  $scope.togglePostRequest = function(){
    $scope.showme = !$scope.showme;  
  };

  $scope.sendPostRequest = function(){
    HttpRequests.postRequest($scope.request)
      .then(function(data){
        console.log('request posted', data);
      }, function(err){
        console.log('error posting request', err);
      });
  }
}]);
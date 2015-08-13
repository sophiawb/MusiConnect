angular.module('app.nav',[])
.controller('loggedInNavController', ['$scope','$location','Auth', 'HttpRequests', function($scope, $location, Auth, HttpRequests){
  $scope.showme = false;
  
  $scope.request = {};

  $scope.togglePostRequest = function(){
    $scope.showme = !$scope.showme;  
  };

  $scope.sendPostRequest = function(){
    $scope.request.uid = Auth.getUid();
    HttpRequests.postRequest($scope.request)
    .then(function(data){
      console.log('request posted', data);
    }, function(err){
      console.log('error posting request', err);
    });
  }
}]);
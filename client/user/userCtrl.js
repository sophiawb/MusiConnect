angular.module('app.user', [])
.controller('UserController',['$scope', '$routeParams', 'HttpRequests',
  function($scope, $routeParams, HttpRequests){
    $scope.user = {};
    // $scope.user = {
    //   image: 'https://avatars3.githubusercontent.com/u/13667301?v=3&s=200',
    //   name: 'eliot',
    //   location: 'San Francisco',
    //   talents: [{ talent: 'trombone', level: 11}, {talent: 'guitar', level: 4}],
    //   contact: 'develiot.com',
    // };

    // $scope.requests = [
    //   { talent: 'drums', level: '8', location: 'emeryville'},
    //   { talent: 'trumpet', level: '7', location: 'the mission'},
    //   { talent: 'violin', level: '5', location: 'novato'}
    // ];

    $scope.deleteRequest = function(index) {
      HttpRequests.makeRequestInactive($scope.requests[index]._id);
      $scope.requests[index] = 0; // TODO: this should run Requests.makeRequestInactive()
    };

    var init = function() {
      console.log('happening');

      HttpRequests.getUser( $routeParams.uid )
      .then(function(user){
        $scope.user = user.data;
        console.log($scope.user);

      }).catch(function(err){ 
        console.log('error fetching user', err);
      });

      HttpRequests.getRequests( $routeParams.uid )
      .then(function(requests){
        console.log(requests);
        $scope.requests = requests.data;
      }).catch(function(err){ 
        console.log('error fetching requests', err);
      });
    };

    init();

    // HttpRequests.getRequests( {name: $routeParams.username})
    //   .then(function(data){
    //     console.log('received requests', data);
    //     $scope.requests = data;
    //   }, function(err){
    //     console.log('error getting requests', err);
    //   });
}]);

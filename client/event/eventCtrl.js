angular.module('app.event', [])
.controller('EventController', ['$scope', '$http', 'HttpRequests', 'randomEvent', function($scope, $http, HttpRequests, randomEvent){
    $scope.search = {};

    $scope.events = [
      { name: 'Gruz Trio', description: 'latin jazz', location: '201 Franklin St San Francisco, CA 94102', organizer: 'SGruz', hashtag: '#jazz#tango'}, // add band
      { name: 'Herrera Quartet', description: 'jazz', location: '510 Embarcadero West Oakland, CA 94607', organizer: 'Herrera', hashtag: '#jazz#fusion'}
    ];

    $scope.makeRandomEvent = function(){
      HttpRequests.postEvent(randomEvent());
    };

    $scope.getEvents = function(){
      HttpRequests.getEvents(function(data){
        $scope.events = data;
      });
    }
}]);


'use strict';
angular.module('rightside', ["ngSanitize"]).
component('rightside', {
    templateUrl: 'templates/rightside.html',
    controller: function ($scope, $http, $interval, ) {
        // $http({
        //     method: 'GET',
        //     url: 'http://www.rotowire.com/rss/news.htm?sport=nhl'
        // }).then(function successCallback(response) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //     $scope.imgSrc = res.data;
        //     console.log(res.data);
        // }, function errorCallback(response) {
        //     console.log("$scope.imgSrc.error.status");             
            
        // });
        //     $http.get("http://www.rotowire.com/rss/news.htm?sport=nhl")
        //     .then(function(res, ) {
        //         $scope.imgSrc = res.data;
        //         console.log(res.data);
        //     })
        //     function errorCallback(response) {
        //         // called asynchronously if an error occurs
        //         // or server returns response with an error status.
        //         $scope.data.error = { message: error, status: status};
        //         console.log($scope.data.error.status); 
        //   }); 
    }
});
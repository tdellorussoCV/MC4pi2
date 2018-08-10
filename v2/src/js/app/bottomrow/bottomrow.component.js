angular.module('bottomrow').
component('bottomrow', {
    templateUrl: 'templates/bottomrow.html',
    controller: function($scope, $http, $interval) {
        var myWeather;
        // $http.get("templates/local/Tinton_Falls.json").then(function(data) {
        $http.get("http://api.wunderground.com/api/347e65e73ff7ed15/conditions/q/NJ/Tinton_Falls.json").then(function(data) {
            $scope.myWeather = data;
            // console.log(data);
        });
        // $http.get("templates/local/Tinton_Falls_for.json").then(function(data) {
        $http.get("http://api.wunderground.com/api/347e65e73ff7ed15/forecast/q/NJ/Tinton_Falls.json").then(function(data) {
            $scope.myForecast = data;
            // console.log(data);
        });
        $interval(function() {
            // $http.get("templates/local/Tinton_Falls.json").then(function(data) {
            $http.get("http://api.wunderground.com/api/347e65e73ff7ed15/conditions/q/NJ/Tinton_Falls.json").then(function(data) {
                $scope.myWeather = data;
                // console.log(data);
            });
        }, 3600000);
        $interval(function() {
            // $http.get("templates/local/Tinton_Falls_for.json").then(function(data) {
            $http.get("http://api.wunderground.com/api/347e65e73ff7ed15/forecast/q/NJ/Tinton_Falls.json").then(function(data) {
                $scope.myForecast = data;
                // console.log(data);
            });
        }, 21600000);
        $http.get("templates/local/mod.json").then(function(data) {
            $scope.myMod = data;
            console.log(data);
        });
    }
});
// $interval(function() {
//             $scope.theTime = new Date().toLocaleTimeString();
//         }, 1000);
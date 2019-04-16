angular.module('bottomrow').
component('bottomrow', {
    templateUrl: 'templates/bottomrow.html',
    controller: function($scope, $http, $interval) {
        // Weather 
        var myWeather;
        // $http.get("templates/local/noaaforecast.json").then(function(data) {
            $http.get("https://api.weather.gov/gridpoints/PHI/83,90/forecast").then(function(data) {
            $scope.myWeather = data;
            console.log(data);
        });
        // $http.get("templates/local/Tinton_Falls_for.json").then(function(data) {
        //     //$http.get("http://api.wunderground.com/api/347e65e73ff7ed15/forecast/q/NJ/Tinton_Falls.json").then(function(data) {
        //     $scope.myForecast = data;
        //     // console.log(data);
        // });
        $interval(function() {
            // $http.get("templates/local/Tinton_Falls.json").then(function(data) {
                $http.get("https://api.weather.gov/gridpoints/PHI/83,90/forecast").then(function(data) {
            $scope.myWeather = data;
                $scope.myWeather = data;
                // console.log(data);
            });
        }, 3600000);
        // $interval(function() {
        //     $http.get("templates/local/Tinton_Falls_for.json").then(function(data) {
        //         //$http.get("http://api.wunderground.com/api/347e65e73ff7ed15/forecast/q/NJ/Tinton_Falls.json").then(function(data) {
        //         $scope.myForecast = data;
        //         // console.log(data);
        //     });
        // }, 21600000);
        $http.get("http://172.19.21.99:81/json/mod.json").then(function(data) {
            $scope.myMod = data;
            // console.log(data);
        });
        // End Weather 
    }
});

// Current conditions at
// Belmar-Farmingdale (KBLM)
// Lat: 40.18°NLon: 74.13°WElev: 157ft.

// https://api.weather.gov/points/40.18,-74.13

// "https://api.weather.gov/stations/KDIX",

// https://api.weather.gov/gridpoints/PHI/83,90/forecast

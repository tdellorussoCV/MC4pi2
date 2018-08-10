'use strict';
angular.module('header').
component('header', {
    templateUrl: 'templates/header.html',
    controller: function($scope, $interval) {
        var days = moment().format("MMM Do YYYY");
        $scope.theDay = days;
        $scope.theTime = new Date().toLocaleTimeString();
        $interval(function() {
            $scope.theTime = new Date().toLocaleTimeString();
        }, 1000);
    }
});
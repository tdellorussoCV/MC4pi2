'use strict';
angular.module('header').
component('header', {
            templateUrl: 'templates/header.html',
            controller: function($scope, $interval) {
                // var days = moment().format("LL");
                $scope.theDay = moment().format("LL");
                $scope.theTime = new Date().toLocaleTimeString();
                console.log($scope.theDay, $scope.theTime);
                $interval(function() {
                    $scope.theTime = new Date().toLocaleTimeString();
                    if ($scope.theTime === '6:15:00 AM') {
                        $scope.theDay = moment().format("LL");
                        console.log($scope.theDay, $scope.theTime);
                    }
                }, 1000);
                //     $interval(function() {
                //         $scope.theDay = moment().format("LL");
                //     }, 43200000)
                }
            });
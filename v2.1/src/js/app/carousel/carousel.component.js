'use strict';
angular.module('carousel', ["ngSanitize"]).
component('carousel', {
    templateUrl: 'templates/carousel.html',
    controller: function($scope, $http, $interval) {
        $scope.imgSrc = [];
        //var for set initial index number in array
        $scope.ind = 0;
        // setting for timer to switch slides
        //getting images
        $http.get("http://172.19.21.99/slides/carousel.json").then(function(res) {
            $scope.imgSrc = res.data;
            // console.log(res.data);
        });
        $interval(function(){
            $http.get("http://172.19.21.99/slides/carousel.json").then(function(res) {
            $scope.imgSrc = res.data;
            // console.log(res.data);
        });
        },3600000);
        $interval(function() {
            if ($scope.ind < ($scope.imgSrc.length - 1)) {
                $scope.ind++;
            } else {
                $scope.ind = 0;
            }
            // console.log($scope.ind, $scope.imgSrc.length);
        }, 15000);

        
        // Image Resizer...
        var imageResizing = angular.module('imageResizingModule', [])
        // Image Resizing...
        imageResizing.directive('imageResizing', [function() {
            return {
                restrict: 'A',
                scope: {
                    imageHeight: '@',
                    imageWidth: '@',
                },
                link: function(scope, element, attrs) {
                    element.bind('load', function() {
                        var imageElement = element[0];
                        console.log("Image Height:" + imageElement.height);
                        console.log("Image Width:" + imageElement.width);
                        var imageSizeCSSClass = {};
                        imageSizeCSSClass["max-width"] = scope.imageWidth;
                        imageSizeCSSClass["max-height"] = scope.imageHeight;
                        $(imageElement).css(imageSizeCSSClass);
                    });
                }
            };
        }]);
    }
});
'use strict';
angular.module('carousel', ["ngSanitize"]).
component('carousel', {
    templateUrl: 'templates/carousel.html',
    controller: function($scope, $http, $interval, ) {
        $scope.imgSrc = [];
        $scope.imgType = null;
        //var for set initial index number in array
        $scope.ind = 0;
        var index = $scope.ind;
        var dynInt = '';
        //setting random to prevent disk caching 
        $scope.rndMath = new Date().getTime();
        $scope.imgUrl = 'http://172.19.21.99:81/slides/'
        //Getting slide information
        $http.get("http://172.19.21.99:81/json/carousel.json").then(function(res, ) {
            $scope.imgSrc = res.data;
            console.log(res.data);
            videochk();
        });
        //recurring Slide information
        $interval(function() {
            $http.get("http://172.19.21.99:81/json/carousel.json").then(function(res) {
                $scope.imgSrc = res.data;
                $scope.rndMath = new Date().getTime();
            });
        }, 300000);
        //END
        //setting for timer to switch slides
        $interval(function() {
            if ($scope.ind < ($scope.imgSrc.length - 1)) {
                $scope.ind++;
                index++;
            } else {
                $scope.ind = 0;
                index = 0;
            }
            videochk();
            console.log()
            // console.log($scope.ind, $scope.imgSrc.length);
        }, 60000);
        //  video change over 
        var videoSrc = '<video height="700px" width="100%" controls autoplay><source src="/slides/NEWSBREIF11-09-2018.mp4" type="video/mp4"></source></video>';
        $scope.videoState = 'false';

        function videochk() {
            if ($scope.imgSrc[index].Extension === '.mp4') {
                $scope.videoState = true
            } else {
                $scope.videoState = false
            }
        };
        //End VideoChk 
        //Interval Check
        //End Interval Check
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
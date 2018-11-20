'use strict';
angular.module('carousel', ["ngSanitize"]).
component('carousel', {
    templateUrl: 'templates/carousel.html',
    controller: function($scope, $http, $interval,) {
        $scope.imgSrc = [];
        $scope.imgType = null;
        //var for set initial index number in array
        $scope.ind = 0;
        var index = $scope.ind;
        
        //setting random to prevent disk caching 
        $scope.rndMath = new Date().getTime();
        $scope.imgUrl = 'http://172.19.21.99:81/slides/'

        //setting random for no cache
        $http.get("/json/carousel.json").then(function(res,) {
            $scope.imgSrc = res.data;
            console.log(res.data);
            console.log(index);
            console.log(res.data[index].Extension);
            videochk();
        });    
        //setting for timer to switch slides
        $interval(function(){            
            $http.get("/json/carousel.json").then(function(res) {
            $scope.imgSrc = res.data;
            console.log(res.data);
            $scope.rndMath = new Date().getTime();
        });
        },300000);
        $interval(function() {
            if ($scope.ind < ($scope.imgSrc.length - 1)) {
                $scope.ind++;
                index++;
            } else {
                $scope.ind = 0;
                index = 0;
            }
            console.log(index);
            console.log($scope.imgSrc[index].Extension);
            videochk();
            // console.log($scope.ind, $scope.imgSrc.length);
        }, 15000);
        //  video change over 
        var videoSrc ='<video height="700px" width="100%" controls autoplay><source src="/slides/NEWSBREIF11-09-2018.mp4" type="video/mp4"></source></video>';
		$scope.videoState = 'false';
        function videochk(){
            if ($scope.imgSrc[index].Extension === '.mp4'){
                $scope.videoState = true
                console.log($scope.videoState);
            }else {$scope.videoState = false}
        };        
        //End VideoChk 
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
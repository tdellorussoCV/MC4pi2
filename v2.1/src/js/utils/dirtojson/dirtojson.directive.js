'use strict';
angular.module('dirtojson').
directive('dirtojson', {
    controller: function($scope, $interval) {
        // var fs = require('fs')
        // var path = require('path')
        var argCount = process.argv.length
        var lastArg = process.argv[argCount - 1]
        // From
        // http://stackoverflow.com/questions/11194287/convert-a-directory-structure-in-the-filesystem-to-json-with-node-js
        function dirTree(filename) {
            var stats = fs.lstatSync(filename),
                info = {
                    path: filename,
                    name: path.basename(filename)
                }
            if (stats.isDirectory()) {
                info.type = "folder"
                info.children = fs.readdirSync(filename).map(function(child) {
                    return dirTree(filename + '/' + child)
                })
            } else {
                // Assuming it's a file. In real life it could be a symlink or
                // something else!
                info.type = "file"
            }
            return info
        }
        var text = JSON.stringify(dirTree(lastArg))
        process.stdout.write(text)
    }
});
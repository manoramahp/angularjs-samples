var module = angular.module("myApp", []);
module.controller("timeCtrl", displayTime);

function displayTime($scope) {
    var date = new Date();
    $scope.currentTime = date.toTimeString();

    $scope.refreshTime = function () {
        var date = new Date();
        $scope.currentTime = date.toTimeString();
    }
}
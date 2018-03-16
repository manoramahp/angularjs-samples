//This is a module available to be used in any angular app
// This need to be imported to an app
var module = angular.module("helloModule", []);
module.controller("helloCtrl", helloFunction);

function helloFunction() {
    this.hello = "This is in helloModule";
}
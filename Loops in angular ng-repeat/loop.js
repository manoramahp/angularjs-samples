var module = angular.module("repeatApp", []);
module.controller("repeatCtrl", repeatFunction);

function repeatFunction() {
    this.myList = [1, 2, 3, 4, 5, 6];

    this.myObjList = [
        { "name" : "Ann", "age" : "20"},
        { "name" : "Taro", "age" : "24"},
        { "name" : "Bill", "age" : "18"},
        { "name" : "Alex", "age" : "27"},
        { "name" : "Kayo", "age" : "22"}
    ];
}
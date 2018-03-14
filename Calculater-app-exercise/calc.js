var module = angular.module("calcApp", []);
module.controller("calcCtrl", mathFunction);

function mathFunction() {

    this.showOperator = function(operator) {
        this.operator = operator;
    }

    this.calculate = function() {
        this.num1 = parseFloat(this.input1);
        this.num2 = parseFloat(this.input2);

        if(this.operator == '+') {
            this.result = this.num1 + this.num2;
        } else if(this.operator == '-') {
           this.result = this.num1 - this.num2;
        } else if(this.operator == '*') {
            this.result = this.num1 * this.num2;
        } else if(this.operator == '/') {
            this.result = this.num1 / this.num2;
        }
    }

}
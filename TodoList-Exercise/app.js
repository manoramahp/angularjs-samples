var module = angular.module("todoApp", []);
module.controller('todoCtrl', TodoCtrl);

function TodoCtrl() {
    this.todos = [
        "Learn angularJS 1",
        "Try out samples",
        "Complete exercises"
    ];
    this.editMode = false;

    this.addTodo = function() {
        this.todos.push(this.newTodo);
    }

    this.triggerEditMode = function() {
        console.log("Edit trigger");
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index) {
        this.todos.splice(index, 1);
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var TaskService = (function () {
    // private _apiUrl = 'http://localhost:3000/api/user/';
    function TaskService(http) {
        this.http = http;
        this._apiUrl = 'http://10.60.67.20:3000/api/projects/';
        this.project_id = sessionStorage.getItem('project_url');
    }
    TaskService.prototype.getTasks = function (backlogitem_id) {
        return this.http.get(this.project_id + "/backlogitems/" + backlogitem_id + "/tasks")
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        core_1.Injectable()
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;

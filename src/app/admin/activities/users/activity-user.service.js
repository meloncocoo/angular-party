"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var USERS = [
    new User(1, '冬瓜oO'),
    new User(2, '活动测试')
];
var FETCH_LATENCY = 500;
var ActivityUserService = (function () {
    function ActivityUserService() {
    }
    ActivityUserService.prototype.getUsers = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(USERS); }, FETCH_LATENCY);
        });
    };
    ActivityUserService.prototype.getUser = function (id) {
        return this.getUsers()
            .then(function (users) { return users.find(function (user) { return user.id === id; }); });
    };
    ActivityUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ActivityUserService);
    return ActivityUserService;
}());
exports.ActivityUserService = ActivityUserService;
//# sourceMappingURL=activity-user.service.js.map
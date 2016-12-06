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
var common_1 = require('@angular/common');
var activities_service_1 = require('../activities.service');
var ActivityAddComponent = (function () {
    function ActivityAddComponent(activitiesService, location) {
        this.activitiesService = activitiesService;
        this.location = location;
    }
    ActivityAddComponent.prototype.ngOnInit = function () {
        this.activity = new activities_service_1.Activity();
    };
    ActivityAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActivityAddComponent.prototype.toSave = function (model) {
        var _this = this;
        this.activitiesService.addActivity(model)
            .then(function () {
            _this.location.back();
        }, function () {
            alert('error');
        });
    };
    ActivityAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity-add',
            templateUrl: 'activity-add.component.html'
        }), 
        __metadata('design:paramtypes', [activities_service_1.ActivitiesService, common_1.Location])
    ], ActivityAddComponent);
    return ActivityAddComponent;
}());
exports.ActivityAddComponent = ActivityAddComponent;
//# sourceMappingURL=activity-add.component.js.map
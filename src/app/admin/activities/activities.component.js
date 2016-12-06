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
var activities_service_1 = require('./activities.service');
var alert_component_1 = require('../../shared/alert.component');
var ActivitiesComponent = (function () {
    function ActivitiesComponent(activitiesService) {
        this.activitiesService = activitiesService;
        this.alert = new alert_component_1.Alert('loading', '数据加载中 ...');
        this.activities = [];
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        this.activitiesService.getActivities().then(function (activities) {
            _this.activities = activities;
            _this.alert.clear();
        }, function (err) {
            _this.alert.set('danger', err, true);
        });
    };
    ActivitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-activities',
            templateUrl: 'activities.component.html'
        }), 
        __metadata('design:paramtypes', [activities_service_1.ActivitiesService])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
exports.ActivitiesComponent = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map
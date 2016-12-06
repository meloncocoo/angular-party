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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var activities_service_1 = require('../activities.service');
var alert_component_1 = require('../../../shared/alert.component');
var ActivityDetailComponent = (function () {
    function ActivityDetailComponent(activitiesService, route, location) {
        this.activitiesService = activitiesService;
        this.route = route;
        this.location = location;
        this.alert = new alert_component_1.Alert('loading', '数据加载中 ...');
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.activitiesService.getActivity(+params['id']); })
            .subscribe(function (activity) {
            _this.alert.clear();
            _this.activity = activity;
        });
    };
    ActivityDetailComponent.prototype.toSave = function (model) {
        var _this = this;
        this.activitiesService.updateActivity(model)
            .then(function () {
            _this.location.back();
        }, function (err) {
            _this.alert.set('danger', err, true);
        });
    };
    ActivityDetailComponent.prototype.toDelete = function (model) {
        var _this = this;
        this.activitiesService.deleteActivity(model.id)
            .then(function () {
            _this.location.back();
        }, function (err) {
            _this.alert.set('danger', err, true);
        });
    };
    ActivityDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', activities_service_1.Activity)
    ], ActivityDetailComponent.prototype, "activity", void 0);
    ActivityDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity-detail',
            templateUrl: 'activity-detail.component.html'
        }), 
        __metadata('design:paramtypes', [activities_service_1.ActivitiesService, router_1.ActivatedRoute, common_1.Location])
    ], ActivityDetailComponent);
    return ActivityDetailComponent;
}());
exports.ActivityDetailComponent = ActivityDetailComponent;
//# sourceMappingURL=activity-detail.component.js.map
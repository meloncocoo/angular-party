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
var activities_service_1 = require('../activities.service');
var ActivityFormimplements = (function () {
    function ActivityFormimplements() {
        this.saveEvent = new core_1.EventEmitter();
        this.deleteEvent = new core_1.EventEmitter();
        this.backEvent = new core_1.EventEmitter();
    }
    ActivityFormimplements.prototype.ngOnInit = function () { };
    ActivityFormimplements.prototype.canDelete = function () {
        return this.activity && this.activity.id !== null;
    };
    ActivityFormimplements.prototype.onSubmit = function () {
        this.saveEvent.emit(this.activity);
    };
    ActivityFormimplements.prototype.onDelete = function () {
        this.deleteEvent.emit(this.activity);
    };
    ActivityFormimplements.prototype.goBack = function () {
        this.backEvent.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', activities_service_1.Activity)
    ], ActivityFormimplements.prototype, "activity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ActivityFormimplements.prototype, "saveEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ActivityFormimplements.prototype, "deleteEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ActivityFormimplements.prototype, "backEvent", void 0);
    ActivityFormimplements = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity-form',
            templateUrl: 'activity-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ActivityFormimplements);
    return ActivityFormimplements;
}());
exports.ActivityFormimplements = ActivityFormimplements;
//# sourceMappingURL=activity-form.component.js.map
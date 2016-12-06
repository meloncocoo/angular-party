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
var Alert = (function () {
    function Alert(type, content) {
        this.type = type;
        this.content = content;
        this.dismissible = false;
    }
    Alert.prototype.clear = function () {
        this.content = '';
    };
    Alert.prototype.set = function (type, content, dismissible) {
        if (dismissible === void 0) { dismissible = false; }
        this.type = type;
        this.content = content;
        this.dismissible = dismissible;
    };
    return Alert;
}());
exports.Alert = Alert;
var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.setClasses = function () {
        var classes = {
            'alert': true,
            'alert-info': this.alert.type === 'info',
            'alert-success': this.alert.type === 'success',
            'alert-danger': this.alert.type === 'danger',
            'alert-warning': this.alert.type === 'warning',
            'alert-dismissible': this.alert.dismissible
        };
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Alert)
    ], AlertComponent.prototype, "alert", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-alert',
            template: "\n    <div *ngIf=\"alert && alert.content\" [ngClass]=\"setClasses()\">\n      <i *ngIf=\"alert && alert.type === 'loading'\" class=\"fa fa-spinner fa-pulse fa-fw\"></i>\n      {{alert.content}}\n      <button *ngIf=\"alert.dismissible\" type=\"button\" class=\"close\" data-dismiss=\"alert\">\n        <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n      </button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map
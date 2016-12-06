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
var StatusDirective = (function () {
    function StatusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    StatusDirective.prototype.ngOnChanges = function () {
        var text = '', className = 'label-default';
        switch (this.status) {
            case 0:
                text = '未发布';
                className = 'label-warning';
                break;
            case 1:
                text = '已发布';
                className = 'label-success';
                break;
        }
        this.renderer.setElementClass(this.el.nativeElement, className, true);
        this.renderer.createText(this.el.nativeElement, text);
    };
    __decorate([
        core_1.Input('activityStatus'), 
        __metadata('design:type', Number)
    ], StatusDirective.prototype, "status", void 0);
    StatusDirective = __decorate([
        core_1.Directive({
            selector: '[activityStatus]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], StatusDirective);
    return StatusDirective;
}());
exports.StatusDirective = StatusDirective;
//# sourceMappingURL=status.directive.js.map
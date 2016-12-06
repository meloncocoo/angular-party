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
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../../shared/shared.module');
var shared_module_2 = require('./shared/shared.module');
var activities_routing_module_1 = require('./activities-routing.module');
var activities_component_1 = require('./activities.component');
var activity_add_component_1 = require('./activity/activity-add.component');
var activity_form_component_1 = require('./activity/activity-form.component');
var activity_detail_component_1 = require('./activity/activity-detail.component');
var box_component_1 = require('./box.component');
var activity_users_component_1 = require('./users/activity-users.component');
var activities_service_1 = require('./activities.service');
var ActivitiesModule = (function () {
    function ActivitiesModule() {
    }
    ActivitiesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                shared_module_2.ActivityStatusModule,
                activities_routing_module_1.ActivitiesRoutingModule
            ],
            declarations: [
                activities_component_1.ActivitiesComponent,
                activity_add_component_1.ActivityAddComponent,
                activity_form_component_1.ActivityFormimplements,
                activity_detail_component_1.ActivityDetailComponent,
                box_component_1.BoxComponent,
                activity_users_component_1.ActivityUsersComponent
            ],
            providers: [activities_service_1.ActivitiesService]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivitiesModule);
    return ActivitiesModule;
}());
exports.ActivitiesModule = ActivitiesModule;
//# sourceMappingURL=activities.module.js.map
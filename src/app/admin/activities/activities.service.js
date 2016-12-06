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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Activity = (function () {
    function Activity(id, name, desc, parts, date) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.parts = parts;
        this.date = date;
    }
    return Activity;
}());
exports.Activity = Activity;
// const FETCH_LATENCY = 500;
var ActivitiesService = (function () {
    function ActivitiesService(http) {
        this.http = http;
        this.activityUrl = 'http://localhost:8080/api/activity';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.ResponseOptions({ headers: this.headers });
    }
    ActivitiesService.prototype.getActivities = function () {
        var url = "" + this.activityUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ActivitiesService.prototype.getActivity = function (id) {
        var url = this.activityUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ActivitiesService.prototype.addActivity = function (activity) {
        var url = "" + this.activityUrl;
        return this.http
            .post(url, JSON.stringify(activity), this.options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ActivitiesService.prototype.updateActivity = function (activity) {
        var url = this.activityUrl + "/" + activity.id;
        return this.http
            .put(url, JSON.stringify(activity), this.options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ActivitiesService.prototype.deleteActivity = function (id) {
        var url = this.activityUrl + "/" + id;
        return this.http.delete(url, this.options)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ActivitiesService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    };
    ActivitiesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ActivitiesService);
    return ActivitiesService;
}());
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map
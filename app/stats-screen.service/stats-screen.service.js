/*
 * Copyright (C) 2016 ikerllorens
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
System.register(['@angular/core', '../main-app/main-app', '../classes/StatsObject.class/StatsObject.class', '@angular/http', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, main_app_1, StatsObject_class_1, http_1, Subject_1;
    var StatsScreenService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            },
            function (StatsObject_class_1_1) {
                StatsObject_class_1 = StatsObject_class_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            StatsScreenService = (function () {
                function StatsScreenService(http) {
                    this.http = http;
                    this.statsObservable = new Subject_1.Subject();
                    this.statsObservable$ = this.statsObservable.asObservable();
                }
                StatsScreenService.prototype.getStats = function (token) {
                    var _this = this;
                    var body = new StatsObject_class_1.StatsRequest(token);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var url = main_app_1.Main.serverUrl + 'stats.php';
                    this.http.post(url, JSON.stringify(body), options)
                        .map(this.extractData)
                        .subscribe(function (stats) {
                        if (stats.success) {
                            _this.statsObservable.next(stats);
                        }
                        else {
                            console.error("Could not fetch stats because: " + stats.reason);
                        }
                    });
                };
                StatsScreenService.prototype.extractData = function (res) {
                    console.warn(res.text());
                    var responseJSON = res.json();
                    return responseJSON;
                };
                StatsScreenService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StatsScreenService);
                return StatsScreenService;
            }());
            exports_1("StatsScreenService", StatsScreenService);
        }
    }
});
//# sourceMappingURL=stats-screen.service.js.map
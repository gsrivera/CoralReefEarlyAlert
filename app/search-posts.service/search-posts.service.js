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
System.register(['@angular/core', '@angular/http', '../main-app/main-app', '../classes/PostObject.class/PostObject.class', 'rxjs/Subject', '../rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, http_1, main_app_1, PostObject_class_1, Subject_1;
    var SearchPostsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (main_app_1_1) {
                main_app_1 = main_app_1_1;
            },
            function (PostObject_class_1_1) {
                PostObject_class_1 = PostObject_class_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {}],
        execute: function() {
            SearchPostsService = (function () {
                function SearchPostsService(http) {
                    this.http = http;
                    this.coralTypesObservable = new Subject_1.Subject();
                    this.coralTypesObservable$ = this.coralTypesObservable.asObservable();
                    this.coralSpeciesObservable = new Subject_1.Subject();
                    this.coralSpeciesObservable$ = this.coralSpeciesObservable.asObservable();
                    this.sectorsObservable = new Subject_1.Subject();
                    this.sectorsObservable$ = this.sectorsObservable.asObservable();
                    this.subsectorObservable = new Subject_1.Subject();
                    this.subsectorObsevable$ = this.subsectorObservable.asObservable();
                    this.numberOfPagesObservable = new Subject_1.Subject();
                    this.numberOfPagesObservable$ = this.numberOfPagesObservable.asObservable();
                    console.info('search-posts module loaded');
                }
                SearchPostsService.prototype.getCoralTypes = function () {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(main_app_1.Main.serverUrl + 'getTipCorales.php', options).map(this.extractData).subscribe(function (CoralTypes) {
                        if (CoralTypes.success) {
                            _this.coralTypesObservable.next(CoralTypes);
                        }
                        else {
                            console.error("Could not fetch CoralTypes because: " + CoralTypes.reason);
                        }
                    });
                };
                SearchPostsService.prototype.getCoralSpecies = function () {
                    var _this = this;
                    var typeID = -1;
                    var coralType = new PostObject_class_1.CoralSpeciesRequest(typeID);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    console.warn(JSON.stringify(coralType));
                    this.http.post(main_app_1.Main.serverUrl + 'getEspecies.php', JSON.stringify(coralType), options)
                        .map(this.extractData)
                        .subscribe(function (coralSpecies) {
                        if (coralSpecies.success) {
                            _this.coralSpeciesObservable.next(coralSpecies);
                        }
                        else {
                            console.error("Could not fetch CoralSpecies because: " + coralSpecies.reason);
                        }
                    });
                };
                SearchPostsService.prototype.getSectors = function () {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(main_app_1.Main.serverUrl + 'getSectores.php', options)
                        .map(this.extractData)
                        .subscribe(function (sectors) {
                        if (sectors.success) {
                            _this.sectorsObservable.next(sectors);
                        }
                        else {
                            console.error("Could not fetch sectors because: " + sectors.reason);
                        }
                    });
                };
                SearchPostsService.prototype.getSubsectors = function () {
                    var _this = this;
                    var idSector = -1;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var sector = new PostObject_class_1.SubsectorsRequest(idSector);
                    this.http.post(main_app_1.Main.serverUrl + 'getSubSectores.php', JSON.stringify(sector), options)
                        .map(this.extractData)
                        .subscribe(function (subsectors) {
                        if (subsectors.success) {
                            _this.subsectorObservable.next(subsectors);
                        }
                        else {
                            console.error('Could not fetch subsectors because: ' + subsectors.reason);
                        }
                    });
                };
                SearchPostsService.prototype.extractData = function (res) {
                    console.info('Response: ' + res.text());
                    var responseJSON = res.json();
                    return responseJSON;
                };
                SearchPostsService.prototype.getTableData = function () {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(main_app_1.Main.serverUrl + 'pagination.php', options)
                        .map(this.extractData)
                        .subscribe(function (tableResponse) {
                        if (tableResponse.success) {
                            _this.numberOfPagesObservable.next(tableResponse.paginas);
                        }
                        else {
                            console.error('Could not fetch Posts because: ' + tableResponse.reason);
                        }
                    });
                };
                SearchPostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchPostsService);
                return SearchPostsService;
            }());
            exports_1("SearchPostsService", SearchPostsService);
        }
    }
});
//# sourceMappingURL=search-posts.service.js.map
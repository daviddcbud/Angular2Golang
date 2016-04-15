System.register(["angular2/core", "../cacheBuster", '../common/spinner.component', "../common/httpServices.service"], function(exports_1, context_1) {
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
    var core_1, cacheBuster_1, spinner_component_1, httpServices_service_1;
    var SongsSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (httpServices_service_1_1) {
                httpServices_service_1 = httpServices_service_1_1;
            }],
        execute: function() {
            SongsSearchComponent = (function () {
                function SongsSearchComponent(_http) {
                    this._http = _http;
                }
                SongsSearchComponent.prototype.ngOnInit = function () {
                    this.searchText = "testing";
                };
                SongsSearchComponent.prototype.search = function () {
                    var _this = this;
                    this.isSearching = true;
                    this._http.post({ searchText: this.searchText }, '/api/searchSong').subscribe(function (x) {
                        console.log(x);
                        _this.songs = x;
                        _this.isSearching = false;
                    });
                };
                SongsSearchComponent = __decorate([
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/songs/search.html'),
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [httpServices_service_1.HttpServices])
                ], SongsSearchComponent);
                return SongsSearchComponent;
            }());
            exports_1("SongsSearchComponent", SongsSearchComponent);
        }
    }
});
//# sourceMappingURL=songsSearch.component.js.map